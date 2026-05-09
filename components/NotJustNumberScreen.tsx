"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { FINAL_SUBSCRIBERS } from "@/lib/constants";
import { FloatingIcons } from "./FloatingIcons";

const DOT_COUNT = 18;

function buildDots() {
  const dots: { x: number; y: number; delay: number; color: string }[] = [];
  const colors = [
    "bg-rose-400",
    "bg-amber-300",
    "bg-sky-300",
    "bg-emerald-300",
    "bg-fuchsia-400",
    "bg-orange-300",
  ];
  for (let i = 0; i < DOT_COUNT; i++) {
    const angle = (i / DOT_COUNT) * Math.PI * 2;
    const radius = 110 + (i % 3) * 22;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    dots.push({
      x,
      y,
      delay: 0.3 + (i * 0.06),
      color: colors[i % colors.length],
    });
  }
  return dots;
}

export function NotJustNumberScreen() {
  const dots = useMemo(() => buildDots(), []);

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 px-6">
      <FloatingIcons variant="notNumber" />

      <div className="relative z-10 flex items-center justify-center">
        <div className="relative h-[260px] w-[260px]">
          {dots.map((d, i) => (
            <motion.div
              key={i}
              className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${d.color} shadow-[0_0_8px_currentColor]`}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0.85],
                scale: [0, 1.1, 1],
                x: d.x,
                y: d.y,
              }}
              transition={{
                duration: 0.9,
                delay: d.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-5xl font-black tracking-tight tabular-nums">
              {FINAL_SUBSCRIBERS}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="relative z-10 mt-8 max-w-[320px] text-center text-base font-semibold leading-snug"
      >
        100 000 человек нажали «подписаться».
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="relative z-10 mt-3 max-w-[320px] text-center text-sm text-neutral-300"
      >
        Но на самом деле они выбрали твой стиль, твою энергию и тебя.
      </motion.p>
    </div>
  );
}
