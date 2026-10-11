import { CircleAlert, ListChecks, Lock, Quote, Target, TriangleAlert } from "lucide-react";
import { Panel, SourceChip } from "./panel";
import { constraints, problems, quotes, requested, unknowns, type Sourced } from "@/lib/data";

function SourcedList({ items }: { items: Sourced[] }) {
  return (
    <ul className="divide-y px-4">
      {items.map((i) => (
        <li key={i.text} className="flex min-h-[42px] items-center gap-3 py-2">
          <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
          <span className="flex-1 text-[14px] leading-6">{i.text}</span>
          <SourceChip at={i.at} />
        </li>
      ))}
    </ul>
  );
}

export function DiscoveryPanels() {
  return (
    <div className="flex min-w-0 flex-col gap-5">
      <Panel icon={Target} title="Business goal" i={2}>
        <div className="px-4 py-3.5">
          <p className="text-lg font-semibold leading-6 tracking-[-0.02em]">Improve onboarding conversion for new users.</p>
          <div className="mt-2 flex flex-wrap items-center gap-2.5">
            <SourceChip at="04:12" />
            <span className="text-[13px] text-muted-foreground">Signups that finish setup: 46% today, target 65%</span>
          </div>
        </div>
      </Panel>

      <div className="grid gap-5 md:grid-cols-2">
        <Panel icon={CircleAlert} title="Problems" i={3}><SourcedList items={problems} /></Panel>
        <Panel icon={ListChecks} title="Requested work" i={4}><SourcedList items={requested} /></Panel>
        <Panel icon={Lock} title="Constraints" i={5}><SourcedList items={constraints} /></Panel>
        <Panel icon={CircleAlert} title="Unknowns" i={6} count={unknowns.length}>
          <ul className="divide-y px-4">
            {unknowns.map((u) => (
              <li key={u.text} className="flex min-h-[42px] items-center gap-3 py-2">
                <TriangleAlert className="size-4 shrink-0 text-warn-icon" strokeWidth={1.5} />
                <span className="flex-1 text-[14px] leading-6">{u.text}</span>
                <span className="text-right text-[13px] text-muted-foreground">{u.status}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel icon={Quote} title="In their words" i={7}>
        <ul className="space-y-3.5 px-4 py-4">
          {quotes.map((q) => (
            <li key={q.at} className="flex flex-col gap-1.5 sm:flex-row sm:gap-5">
              <SourceChip at={q.at} className="self-start" />
              <div>
                <p className="text-[13px] font-semibold leading-5">{q.who}</p>
                <p className="mt-0.5 text-[14px] leading-6">{q.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
