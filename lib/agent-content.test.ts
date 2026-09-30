import { describe, expect, it } from "vitest";
import {
  build404Markdown,
  getMarkdownPage,
  isKnownRoute,
  wantsMarkdown,
} from "./agent-content";

describe("wantsMarkdown", () => {
  it("returns false when there is no Accept header", () => {
    expect(wantsMarkdown(null)).toBe(false);
    expect(wantsMarkdown(undefined)).toBe(false);
  });

  it("returns false when Accept does not mention text/markdown", () => {
    expect(wantsMarkdown("text/html")).toBe(false);
    expect(wantsMarkdown("*/*")).toBe(false);
  });

  it("returns true for a plain text/markdown Accept header", () => {
    expect(wantsMarkdown("text/markdown")).toBe(true);
  });

  it("returns true when markdown is listed without an explicit html preference", () => {
    expect(wantsMarkdown("text/markdown, */*;q=0.1")).toBe(true);
  });

  it("prefers markdown when its quality is at least as high as html", () => {
    expect(wantsMarkdown("text/markdown;q=0.9, text/html;q=0.8")).toBe(true);
    expect(wantsMarkdown("text/markdown, text/html")).toBe(true);
  });

  it("defers to html when html is explicitly preferred over markdown", () => {
    expect(wantsMarkdown("text/markdown;q=0.5, text/html;q=0.9")).toBe(false);
  });
});

describe("getMarkdownPage", () => {
  it("returns the homepage markdown for /", () => {
    const page = getMarkdownPage("/");
    expect(page).not.toBeNull();
    expect(page?.markdown).toContain("Rushh");
    expect(page?.markdown.length).toBeGreaterThan(20);
  });

  it("normalizes a trailing slash", () => {
    expect(getMarkdownPage("/about/")).toEqual(getMarkdownPage("/about"));
  });

  it("returns null for a page with no markdown representation", () => {
    expect(getMarkdownPage("/this-page-does-not-exist")).toBeNull();
  });
});

describe("isKnownRoute", () => {
  it("treats markdown pages as known routes", () => {
    expect(isKnownRoute("/")).toBe(true);
    expect(isKnownRoute("/contact")).toBe(true);
  });

  it("treats authenticated app surfaces as known routes", () => {
    expect(isKnownRoute("/dashboard")).toBe(true);
  });

  it("treats an arbitrary path as unknown", () => {
    expect(isKnownRoute("/__ora-404-probe-1jfjtn6l")).toBe(false);
  });
});

describe("build404Markdown", () => {
  it("includes the requested path and links to discovery resources", () => {
    const body = build404Markdown("/nope");
    expect(body.length).toBeGreaterThanOrEqual(20);
    expect(body).toContain("/nope");
    expect(body).toContain("/sitemap.xml");
    expect(body).toContain("/llms.txt");
  });
});
