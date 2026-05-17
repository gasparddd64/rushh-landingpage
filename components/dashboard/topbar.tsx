"use client";

import { Search, Bell, HelpCircle, PanelLeftClose } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  sidebarCollapsed: boolean;
  onOpenSidebar: () => void;
}

export function Topbar({ sidebarCollapsed, onOpenSidebar }: TopbarProps) {
  return (
    <header className="h-[52px] flex items-center gap-3 px-4 border-b border-[var(--br-border)] bg-white flex-shrink-0">
      {sidebarCollapsed && (
        <button
          onClick={onOpenSidebar}
          className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-3)] hover:bg-black/5 hover:text-[var(--br-black)] transition-colors"
          title="Ouvrir la sidebar"
        >
          <PanelLeftClose size={15} className="scale-x-[-1]" />
        </button>
      )}

      {/* Search bar */}
      <div
        className="flex items-center gap-[10px] flex-1 max-w-[520px] mx-auto h-[34px] px-3 rounded-[8px] border border-[var(--br-border)] bg-[var(--br-bg-2)] cursor-pointer hover:border-[var(--br-border-2)] transition-colors"
        role="button"
        tabIndex={0}
      >
        <Search size={13} className="text-[var(--br-text-3)] flex-shrink-0" />
        <span className="text-[13px] text-[var(--br-text-3)] flex-1 truncate select-none">
          Rechercher prospects, campagnes, conversations...
        </span>
        <span className="text-[11px] text-[var(--br-text-3)] font-mono bg-white border border-[var(--br-border)] rounded-[4px] px-[5px] py-[1px] flex-shrink-0">
          ⌘K
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-1 ml-auto">
        <button
          className="relative w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-2)] hover:bg-black/5 transition-colors"
          title="Notifications"
        >
          <Bell size={15} />
          <span className="absolute top-[6px] right-[6px] w-[6px] h-[6px] rounded-full bg-[var(--br-blue)]" />
        </button>
        <button
          className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center text-[var(--br-text-2)] hover:bg-black/5 transition-colors"
          title="Aide"
        >
          <HelpCircle size={15} />
        </button>
        <div className="w-[26px] h-[26px] rounded-full bg-[var(--br-gray)] flex items-center justify-center text-white text-[9px] font-semibold ml-1 cursor-pointer">
          GD
        </div>
      </div>
    </header>
  );
}
