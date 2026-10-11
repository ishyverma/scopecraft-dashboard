"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const; // strong ease-out (emil-design-eng)
const STEP = 0.07; // seconds between items

type Tag = "div" | "section" | "aside";

export function Reveal({
  as = "div",
  i = 0,
  className,
  children,
}: {
  as?: Tag;
  i?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      className={className}
      // full transform string = hardware accelerated (emil-design-eng)
      initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(4px)", transform: "translateY(8px)" }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
      transition={{ duration: 0.3, ease: easeOut, delay: i * STEP }}
      // don't leave a filter/transform behind (keeps text crisp, no stacking context)
      onAnimationComplete={() => {
        const el = ref.current;
        if (el) { el.style.filter = "none"; el.style.transform = "none"; }
      }}
    >
      {children}
    </Comp>
  );
}
