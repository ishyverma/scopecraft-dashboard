import { AudioLines, Mic, Play, Sparkles, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SourceChip } from "./panel";
import { Button } from "@/components/ui/button";

export function RightRail() {
  return (
    <aside className="flex min-w-0 flex-col gap-5">
      <Reveal as="section" i={2} className="rounded-[14px] border border-panel-border bg-panel p-1 shadow-shell">
        <h2 className="flex h-9 items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.03em]">
          <Mic className="size-3.5" strokeWidth={2} /> Discovery call
        </h2>
        <div className="rounded-[10px] bg-surface px-4 pb-1 pt-4 shadow-row">
          <div className="flex items-center gap-3">
            <button aria-label="Play" className="grid size-8 place-items-center rounded-lg bg-surface shadow-row"><Play className="size-3.5 fill-current" /></button>
            <AudioLines className="h-8 flex-1 text-foreground" strokeWidth={1.5} />
          </div>
          <dl className="mt-3 divide-y text-[13px]">
            {["Date", "Speakers", "Also used"].map((k) => (
              <div key={k} className="flex h-[34px] items-center justify-between"><dt className="text-muted-foreground">{k}</dt><dd /></div>
            ))}
          </dl>
        </div>
      </Reveal>

      <Reveal as="section" i={3} className="rounded-[14px] border border-warn-border bg-warn-bg p-3.5">
        <h3 className="flex items-center gap-2.5 text-[13px] font-semibold text-warn-fg">
          <TriangleAlert className="size-4 text-warn-icon" strokeWidth={2} /> Conflicting info
        </h3>
        <p className="mt-1 text-[13px] leading-6">The client mentioned both a 6 to 8 week timeline and a faster launch.</p>
        <div className="mt-2 flex gap-2"><SourceChip at="18:40" /></div>
      </Reveal>

      <Reveal as="section" i={4} className="rounded-[14px] border border-info-border bg-info-bg p-3.5">
        <h3 className="flex items-center gap-2.5 text-[13px] font-semibold text-info-fg">
          <Sparkles className="size-4" strokeWidth={2} /> 3 things need clarifying
        </h3>
        <p className="mt-1 text-[13px] leading-6">Scopecraft will not guess the hours and the price for these.</p>
        <Button variant="outline" className="mt-3 h-8 rounded-lg border-info-border bg-surface dark:border-info-border dark:bg-surface px-3 text-[13px] font-medium text-info-fg">Clarify now</Button>
      </Reveal>
    </aside>
  );
}
