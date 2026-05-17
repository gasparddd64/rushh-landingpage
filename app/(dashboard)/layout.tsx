"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const pathname = usePathname();
  const isChatPage = pathname === "/chat";
  const isFullHeight = isChatPage || pathname === "/inbox";

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--br-bg)]">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {!isChatPage && (
          <Topbar
            sidebarCollapsed={sidebarCollapsed}
            onOpenSidebar={() => setSidebarCollapsed(false)}
          />
        )}
        {isFullHeight ? (
          <div className="flex-1 overflow-hidden">{children}</div>
        ) : (
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-[1200px] mx-auto px-8 py-8">{children}</div>
          </main>
        )}
      </div>
    </div>
  );
}
