import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  build404Markdown,
  getMarkdownPage,
  isKnownRoute,
  wantsMarkdown,
} from "@/lib/agent-content";

export function proxy(request: NextRequest) {
  if (!wantsMarkdown(request.headers.get("accept"))) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const page = getMarkdownPage(pathname);

  if (page) {
    return new NextResponse(page.markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  if (isKnownRoute(pathname)) {
    // Real route without a Markdown representation (e.g. authenticated app surface) — serve HTML as usual.
    return NextResponse.next();
  }

  return new NextResponse(build404Markdown(pathname), {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf)$).*)",
  ],
};
