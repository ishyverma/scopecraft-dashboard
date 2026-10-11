import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Topbar } from "@/components/discovery/topbar";
import { ProjectHeader } from "@/components/discovery/project-header";
import { DiscoveryPanels } from "@/components/discovery/discovery-panels";
import { RightRail } from "@/components/discovery/right-rail";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0 overflow-hidden md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:border md:peer-data-[variant=inset]:shadow-inset-card">
        <Topbar trigger={<SidebarTrigger className="md:hidden" />} />
        <div className="flex-1 overflow-y-auto px-4 pb-6 pt-5 md:px-5">
          <ProjectHeader />
          <div className="mt-4 grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <DiscoveryPanels />
            <RightRail />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
