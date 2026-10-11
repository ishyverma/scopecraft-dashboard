import { Reveal } from "@/components/reveal";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/lib/data";

export function ProjectHeader() {
  return (
    <>
      <Reveal i={0} className="flex flex-wrap items-start gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-foreground text-base font-semibold text-background">G</div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-lg font-semibold leading-6 tracking-[-0.02em] text-balance">Guilder · SaaS UX redesign</h1>
            <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-surface px-2.5 text-xs font-medium shadow-row">
              <span className="size-1.5 rounded-full bg-[#3b82f6]" /> Discovery
            </span>
          </div>
          <p className="mt-0.5 text-[13px] leading-5 text-muted-foreground">
            FinTech · Odalys Brandt, Head of Product · Discovery call Fri, Oct 2
          </p>
        </div>
        <Button
          variant="outline"
          className="h-9 gap-2 rounded-lg border-transparent bg-surface dark:border-transparent dark:bg-surface px-3 text-[13px] font-medium shadow-row! transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          <RotateCw className="size-4" strokeWidth={1.5} /> Re-run analysis
        </Button>
      </Reveal>

      <Reveal i={1} className="mt-5">
      <Tabs defaultValue="Discovery">
          {/* concentric: outer 10px = inner 6px + 4px gap (1px border + 3px padding) */}
        <TabsList className="h-[36px]! w-full justify-start gap-0.5 overflow-x-auto rounded-[10px] border border-panel-border bg-tablist px-[3px] [scrollbar-width:none]">
          {tabs.map((t) => (
            <TabsTrigger
              key={t}
              value={t}
              className="h-7 flex-none rounded-[6px] border border-transparent px-4 text-[14px] font-medium text-muted-foreground transition-[color,background-color,box-shadow] duration-150 ease-out hover:text-foreground data-[state=active]:border-transparent data-[state=active]:bg-surface data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:shadow-pill! dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-surface dark:data-[state=active]:text-foreground"
            >
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      </Reveal>
    </>
  );
}
