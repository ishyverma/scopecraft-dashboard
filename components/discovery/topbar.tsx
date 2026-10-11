import { ThemeToggle } from "@/components/theme-toggle";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Topbar({ trigger }: { trigger: React.ReactNode }) {
  return (
    <header className="flex h-[62px] shrink-0 items-center gap-3 border-b px-4 md:px-5">
      {trigger}
      <label className="flex h-9 w-full max-w-[330px] items-center gap-2 rounded-lg bg-surface px-3 shadow-row">
        <Search className="size-4 text-foreground/70" strokeWidth={1.5} />
        <input placeholder="Search opportunities, clients, projects" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground" />
        <kbd className="hidden rounded bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground sm:block">⌘K</kbd>
      </label>
      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        <div className="flex -space-x-1.5">
        <Avatar className="size-[30px] ring-2 ring-surface"><AvatarImage src="/avatar.jpg" alt="" /><AvatarFallback>N</AvatarFallback></Avatar>
        <Avatar className="size-[30px] ring-2 ring-surface"><AvatarFallback className="bg-[#e8efff] text-[11px] font-semibold text-[#2f5fc4]">HO</AvatarFallback></Avatar>
        <Avatar className="size-[30px] ring-2 ring-surface"><AvatarFallback className="bg-[#fdf1d6] text-[11px] font-semibold text-[#a86b00]">R</AvatarFallback></Avatar>
      </div>
      </div>
    </header>
  );
}
