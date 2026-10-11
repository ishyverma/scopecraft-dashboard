import type { LucideIcon } from "lucide-react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Panel({ icon: Icon, title, count, className, i = 0, children }: {
  icon: LucideIcon; title: string; count?: number; className?: string; i?: number; children: React.ReactNode;
}) {
  return (
    <Reveal as="section" i={i} className={cn("rounded-[14px] border border-panel-border bg-panel p-1 shadow-shell", className)}>
      <h2 className="flex h-9 items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.03em]">
        <Icon className="size-3.5" strokeWidth={2} /> {title}
        {count != null && <span className="grid size-5 place-items-center rounded-full bg-warn-bg text-[11px] font-medium text-warn-fg">{count}</span>}
      </h2>
      <div className="rounded-[10px] bg-surface shadow-row">{children}</div>
    </Reveal>
  );
}

export function SourceChip({ at, className }: { at: string; className?: string }) {
  return (
    <button className={cn("inline-flex h-5 shrink-0 items-center gap-1 rounded-md bg-chip px-2 text-[12px] font-medium text-chip-fg tabular-nums transition-[background-color,transform] duration-150 ease-out hover:bg-chip-hover active:scale-[0.96]", className)}>
      <Play className="size-2.5" strokeWidth={2} /> Call {at}
    </button>
  );
}
