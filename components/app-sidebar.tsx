"use client";
import {
  ArrowUpDown, BriefcaseBusiness, CircleDollarSign, CircleHelp, FileText,
  FolderClosed, LayoutGrid, LayoutTemplate, Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";

const groups = [
  { label: "Workspace", items: [
    { title: "Dashboard", icon: LayoutGrid },
    { title: "Opportunities", icon: BriefcaseBusiness, badge: "8", active: true },
    { title: "Proposals", icon: FileText, badge: "1", alert: true },
    { title: "Projects", icon: FolderClosed },
  ]},
  { label: "Library", items: [
    { title: "Templates", icon: LayoutTemplate },
    { title: "Pricing", icon: CircleDollarSign },
  ]},
  { label: "Account", items: [
    { title: "Settings", icon: Settings },
    { title: "Help and docs", icon: CircleHelp },
  ]},
];

export function AppSidebar() {
  return (
    // inset variant. offcanvas = sheet on mobile; pinned from md up (trigger hidden there)
    <Sidebar variant="inset" collapsible="offcanvas" className="p-0 [--sidebar-width:16rem]">
      <SidebarHeader className="p-4 pb-0">
        <button className="flex h-14 w-full items-center gap-3 rounded-xl bg-surface px-3 text-left shadow-row">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-foreground text-background!">
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9V6a2 2 0 0 1 2-2h3M20 15v3a2 2 0 0 1-2 2h-3M4 15v-1a2 2 0 0 1 2-2h4M14 12h4a2 2 0 0 0 2-2V9" /><circle cx="12" cy="12" r="1.2" fill="#4f8cff" stroke="none" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold leading-[18px] text-foreground">Scopecraft</span>
            <span className="block truncate text-xs leading-4 text-muted-foreground">Brackenhall Studio</span>
          </span>
          <ArrowUpDown className="size-3.5 shrink-0 text-foreground/75" strokeWidth={1.8} />
        </button>
      </SidebarHeader>

      <SidebarContent className="mt-5 gap-3 px-4">
        {groups.map((g) => (
          <SidebarGroup key={g.label} className="p-0">
            <SidebarGroupLabel className="h-8 px-3 text-[11px] font-medium uppercase tracking-[0.05em] text-muted-foreground">
              {g.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-[3px]">
                {g.items.map((it) => (
                  <SidebarMenuItem key={it.title}>
                    <SidebarMenuButton
                      isActive={it.active}
                      className="h-9 gap-3 rounded-[10px] px-3 text-sm font-medium text-nav transition-[background-color,box-shadow,transform] duration-150 ease-out hover:bg-surface/70 active:scale-[0.96] data-[active=true]:bg-surface data-[active=true]:font-medium data-[active=true]:text-nav data-[active=true]:shadow-row [&>svg]:size-[18px] [&>svg]:text-nav"
                    >
                      <it.icon strokeWidth={1.5} />
                      <span>{it.title}</span>
                    </SidebarMenuButton>
                    {it.badge && (
                      <SidebarMenuBadge
                        className={
                          it.alert
                            ? "right-2.5 top-1/2! -translate-y-1/2 size-[18px] min-w-0 rounded-[5px] bg-danger text-[11px] font-semibold text-white!"
                            : "right-2.5 top-1/2! -translate-y-1/2 h-5 min-w-5 rounded-md bg-nav/10 px-1.5 text-[11px] font-medium text-nav!"
                        }
                      >
                        {it.badge}
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 pt-0">
        <div className="flex h-14 items-center gap-3 rounded-xl bg-surface px-3 shadow-row">
          <Avatar className="size-8"><AvatarImage src="/avatar.jpg" alt="" /><AvatarFallback>N</AvatarFallback></Avatar>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-[18px]">Nizam</p>
            <p className="truncate text-xs leading-4 text-muted-foreground">contact.niizam@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
