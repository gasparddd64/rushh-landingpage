export type SearchParamsInput = Record<string, string | string[] | undefined>;

export interface ConfirmationData {
  firstName?: string;
  dateLabel?: string;
  timeLabel?: string;
  eventTypeName?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  hasBookingSignal: boolean;
}

const DEFAULT_TIMEZONE = "Europe/Paris";
const MAX_NAME_LENGTH = 40;

function pick(params: SearchParamsInput, keys: string[]): string | undefined {
  for (const key of keys) {
    const raw = params[key];
    const value = Array.isArray(raw) ? raw[0] : raw;
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.length > 0) return trimmed;
    }
  }
  return undefined;
}

function sanitizeName(raw: string): string {
  const cleaned = raw.replace(/[<>{}[\]\\]/g, "").trim().slice(0, MAX_NAME_LENGTH);
  if (!cleaned) return "";
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function formatDateLabel(date: Date, timeZone: string): string | undefined {
  try {
    const parts = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone,
    }).formatToParts(date);

    const weekday = parts.find((p) => p.type === "weekday")?.value;
    const day = parts.find((p) => p.type === "day")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    if (!weekday || !day || !month) return undefined;

    const dayNum = parseInt(day, 10);
    const dayLabel = dayNum === 1 ? "1er" : day;
    return `${weekday} ${dayLabel} ${month}`;
  } catch {
    return undefined;
  }
}

function formatTimeLabel(date: Date, timeZone: string): string | undefined {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone,
    }).formatToParts(date);

    const hour = parts.find((p) => p.type === "hour")?.value;
    const minute = parts.find((p) => p.type === "minute")?.value;
    if (!hour || !minute) return undefined;

    return `${hour}h${minute}`;
  } catch {
    return undefined;
  }
}

export function parseConfirmationParams(params: SearchParamsInput): ConfirmationData {
  const fullName = pick(params, ["invitee_full_name", "name", "full_name", "invitee_name"]);
  let firstNameRaw = pick(params, ["invitee_first_name", "first_name", "firstName", "prenom"]);
  if (!firstNameRaw && fullName) {
    firstNameRaw = fullName.split(/\s+/)[0];
  }
  const firstName = firstNameRaw ? sanitizeName(firstNameRaw) || undefined : undefined;

  const timeZone =
    pick(params, ["invitee_timezone", "invitee_tz", "timezone", "tz"]) || DEFAULT_TIMEZONE;

  const startTimeRaw = pick(params, [
    "event_start_time",
    "start_time",
    "startTime",
    "event_start",
  ]);

  let dateLabel: string | undefined;
  let timeLabel: string | undefined;
  if (startTimeRaw) {
    const date = new Date(startTimeRaw);
    if (!Number.isNaN(date.getTime())) {
      dateLabel = formatDateLabel(date, timeZone);
      timeLabel = formatTimeLabel(date, timeZone);
    }
  }

  const eventTypeName = pick(params, ["event_type_name", "event_type", "eventTypeName"]);
  const utmSource = pick(params, ["utm_source"]);
  const utmMedium = pick(params, ["utm_medium"]);
  const utmCampaign = pick(params, ["utm_campaign"]);

  const hasBookingSignal = Boolean(
    pick(params, [
      "invitee_uuid",
      "event_uuid",
      "invitee_email",
      "event_start_time",
      "start_time",
      "assigned_to",
    ])
  );

  return {
    firstName,
    dateLabel,
    timeLabel,
    eventTypeName,
    utmSource,
    utmMedium,
    utmCampaign,
    hasBookingSignal,
  };
}
