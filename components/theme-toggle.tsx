"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type VTDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

const icon =
  "absolute size-4 transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]";
const hidden = "opacity-0 scale-[0.25] blur-[4px]";
const shown = "opacity-100 scale-100 blur-0";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    const apply = () => {
      document.documentElement.classList.toggle("dark", next);
      try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
      setDark(next);
    };

    const doc = document as VTDocument;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) return apply();

    const transition = doc.startViewTransition(apply);
    transition.ready.then(() => {
      // radius that reaches the farthest corner from the centre
      const r = Math.hypot(window.innerWidth / 2, window.innerHeight / 2);
      document.documentElement.animate(
        { clipPath: ["circle(0px at 50% 50%)", `circle(${r}px at 50% 50%)`] },
        { duration: 600, easing: "cubic-bezier(0.77, 0, 0.175, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative grid size-9 place-items-center rounded-lg bg-surface text-foreground shadow-row transition-transform duration-150 ease-out active:scale-[0.96]"
    >
      <Sun className={`${icon} ${dark ? hidden : shown}`} strokeWidth={1.5} />
      <Moon className={`${icon} ${dark ? shown : hidden}`} strokeWidth={1.5} />
    </button>
  );
}
