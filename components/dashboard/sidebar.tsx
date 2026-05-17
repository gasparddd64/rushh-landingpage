"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  CheckCircle2,
  Megaphone,
  Users,
  Eye,
  BarChart3,
  MessageCircle,
  Settings,
  PanelLeftClose,
  Search,
  PenSquare,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { id: "inbox", label: "Inbox", icon: Inbox, href: "/inbox", badge: 3 },
  { id: "approvals", label: "A approuver", href: "/approvals", isSubItem: true, badgeAmber: 8 },
  { id: "campaigns", label: "Campagnes", icon: Megaphone, href: "/campaigns" },
  { id: "prospects", label: "Prospects", icon: Users, href: "/prospects" },
  { id: "watchlist", label: "Watchlist", icon: Eye, href: "/watchlist" },
  { id: "stats", label: "Stats", icon: BarChart3, href: "/stats" },
] as const;

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

export function Sidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const isChatPage = pathname === "/chat";

  return (
    <aside
      className={cn(
        "flex flex-col border-r border-[var(--br-border)] bg-[var(--br-bg-2)] transition-all duration-200 overflow-hidden",
        collapsed ? "w-0 min-w-0" : "w-[232px] min-w-[232px]"
      )}
      style={{ height: "100vh" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-4">
        <div className="w-[22px] h-[22px] rounded-[6px] bg-[var(--br-blue)] flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-[4px] rounded-[3px] bg-gradient-to-br from-white/50 to-transparent" />
        </div>
        <span className="text-[14px] font-semibold tracking-[-0.02em] text-[var(--br-black)] flex-1 min-w-0">
          BeReach
        </span>
        <button
          onClick={onToggleCollapse}
          className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-black/5 hover:text-[var(--br-black)] transition-colors"
          title="Replier la sidebar"
        >
          <PanelLeftClose size={14} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-[1px] px-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          const Icon = "icon" in item ? item.icon : null;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex items-center gap-[10px] px-2 py-[6px] rounded-[6px] text-[13px] font-medium transition-colors",
                "isSubItem" in item && item.isSubItem && "pl-[30px] text-[12.5px] relative",
                active
                  ? "bg-white text-[var(--br-black)] shadow-[inset_0_0_0_1px_var(--br-border)]"
                  : "text-[var(--br-text-2)] hover:bg-black/[0.04] hover:text-[var(--br-black)]"
              )}
            >
              {"isSubItem" in item && item.isSubItem && (
                <span className="absolute left-[17px] top-0 bottom-0 w-px bg-[var(--br-border)]" />
              )}
              {Icon && (
                <Icon
                  size={15}
                  className={cn(
                    "flex-shrink-0 transition-colors",
                    active ? "text-[var(--br-black)]" : "text-[var(--br-text-3)]"
                  )}
                />
              )}
              <span>{item.label}</span>
              {"badge" in item && item.badge && (
                <span className="ml-auto min-w-[18px] h-[16px] px-[5px] rounded-full bg-[var(--br-black)] text-white text-[10.5px] font-semibold font-mono flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {"badgeAmber" in item && item.badgeAmber && (
                <span className="ml-auto min-w-[18px] h-[16px] px-[5px] rounded-full bg-[#B45309] text-white text-[10.5px] font-semibold font-mono flex items-center justify-center">
                  {item.badgeAmber}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="h-px bg-[var(--br-border)] mx-[6px] my-2" />

      {/* Chat nav item */}
      <div className="px-2">
        <Link
          href="/chat"
          className={cn(
            "flex items-center gap-[10px] px-2 py-[6px] rounded-[6px] text-[13px] font-medium transition-colors",
            isChatPage
              ? "bg-white text-[var(--br-black)] shadow-[inset_0_0_0_1px_var(--br-border)]"
              : "text-[var(--br-text-2)] hover:bg-black/[0.04] hover:text-[var(--br-black)]"
          )}
        >
          <MessageCircle
            size={15}
            className={cn(
              "flex-shrink-0 transition-colors",
              isChatPage ? "text-[var(--br-black)]" : "text-[var(--br-text-3)]"
            )}
          />
          <span>Chat</span>
        </Link>
      </div>

      {/* Chat recents when on chat page */}
      {isChatPage && (
        <div className="flex flex-col gap-1 px-2 mt-1 border-t border-[var(--br-border)] pt-3 flex-1 min-h-0">
          <button className="flex items-center justify-center gap-[7px] h-[30px] bg-white border border-[var(--br-border)] rounded-[7px] text-[var(--br-black)] text-[12.5px] font-medium hover:bg-[var(--br-bg-3)] transition-colors">
            <PenSquare size={13} />
            Nouveau chat
          </button>
          <label className="flex items-center gap-[6px] bg-white border border-[var(--br-border)] rounded-[7px] px-2 h-[28px] mb-1">
            <Search size={12} className="text-[var(--br-text-3)]" />
            <input
              placeholder="Rechercher..."
              className="flex-1 min-w-0 bg-transparent border-0 outline-none text-[12px] text-[var(--br-black)] placeholder:text-[var(--br-text-3)]"
            />
          </label>
          <div className="text-[10px] uppercase tracking-[0.06em] text-[var(--br-text-3)] font-medium px-2 pt-[6px] pb-1">
            Recents
          </div>
          <div className="flex-1 overflow-y-auto flex flex-col gap-[1px]">
            {["Cherche 25 leads fintech", "Analyse campagne Q2", "Redige message pour Pierre", "Compare mes signaux", "Nouvelles opportunites"].map((title, i) => (
              <button
                key={i}
                className="block w-full px-[9px] py-[6px] rounded-[6px] bg-transparent text-left text-[12px] text-[var(--br-black)] truncate hover:bg-black/5 transition-colors"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      )}

      {!isChatPage && <div className="flex-1 min-h-[8px]" />}

      {/* Settings */}
      <div className="px-2">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-[10px] px-2 py-[6px] rounded-[6px] text-[13px] font-medium transition-colors",
            pathname === "/settings"
              ? "bg-white text-[var(--br-black)] shadow-[inset_0_0_0_1px_var(--br-border)]"
              : "text-[var(--br-text-2)] hover:bg-black/[0.04] hover:text-[var(--br-black)]"
          )}
        >
          <Settings
            size={15}
            className={cn(
              "flex-shrink-0 transition-colors",
              pathname === "/settings" ? "text-[var(--br-black)]" : "text-[var(--br-text-3)]"
            )}
          />
          <span>Reglages</span>
        </Link>
      </div>

      {/* User */}
      <div className="flex items-center gap-[9px] px-2 py-2 mt-1 rounded-[6px] mx-2 mb-2 cursor-pointer hover:bg-black/[0.04] transition-colors">
        <div className="w-[28px] h-[28px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0">
          GD
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12.5px] font-medium text-[var(--br-black)] truncate">
            Gaspard David
          </div>
          <div className="text-[11px] text-[var(--br-text-3)]">
            Solo · 14j d&apos;essai
          </div>
        </div>
        <ChevronUp size={13} className="text-[var(--br-text-3)]" />
      </div>
    </aside>
  );
}
