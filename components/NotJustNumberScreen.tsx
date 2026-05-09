"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import { FINAL_SUBSCRIBERS } from "@/lib/constants";
import { FloatingIcons } from "./FloatingIcons";
import { BellIcon } from "./icons";

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
      delay: 0.3 + i * 0.05,
      color: colors[i % colors.length],
    });
  }
  return dots;
}

const TEXT_DELAY = 1.4;
const TAP_DELAY = TEXT_DELAY + 0.6;
const MORPH_DELAY = TAP_DELAY + 0.35;
const BELL_DELAY = MORPH_DELAY + 0.55;
const RING_DELAY = BELL_DELAY + 0.4;

function SubscribeInline() {
  return (
    <span className="relative inline-flex items-center gap-2 align-middle">
      <span className="relative inline-block">
        <motion.span
          initial={{ backgroundColor: "#dc2626", scale: 1 }}
          animate={{
            scale: [1, 0.94, 1],
            backgroundColor: ["#dc2626", "#dc2626", "#27272a"],
          }}
          transition={{
            duration: 0.6,
            delay: MORPH_DELAY,
            times: [0, 0.4, 1],
            ease: "easeInOut",
          }}
          className="relative inline-flex h-8 items-center justify-center rounded-full px-3.5 text-[13px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(220,38,38,0.7)]"
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: MORPH_DELAY + 0.25, duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
          >
            Подписаться
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: MORPH_DELAY + 0.4, duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
              aria-hidden
            >
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19l12-12-1.4-1.4z" />
            </svg>
            Подписан
          </motion.span>
          <span className="invisible whitespace-nowrap">Подписаться</span>
        </motion.span>

        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 0.55,
            delay: MORPH_DELAY + 0.05,
            ease: [0.22, 1, 0.36, 1],
            opacity: { delay: MORPH_DELAY + 0.05, duration: 0.55 },
          }}
          style={{ opacity: 0 }}
          className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/60"
          aria-hidden
        />

        <motion.span
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [24, 0, 0, -6],
            scale: [0.8, 1, 0.85, 0.85],
          }}
          transition={{
            duration: 0.95,
            delay: TAP_DELAY,
            times: [0, 0.4, 0.7, 1],
            ease: "easeOut",
          }}
          className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <span className="block h-6 w-6 rounded-full bg-white/15 ring-2 ring-white/40 backdrop-blur-sm" />
        </motion.span>
      </span>

      <motion.span
        initial={{ opacity: 0, scale: 0, x: -6 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          delay: BELL_DELAY,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative inline-block align-middle"
      >
        <motion.span
          animate={{ rotate: [0, -16, 14, -10, 8, 0] }}
          transition={{
            delay: RING_DELAY,
            duration: 0.7,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top center" }}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-1 ring-white/10"
        >
          <BellIcon className="h-4 w-4 text-white" />
        </motion.span>

        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{
            delay: RING_DELAY,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            opacity: { delay: RING_DELAY, duration: 0.55 },
          }}
          style={{ opacity: 0 }}
          className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-amber-300/70"
          aria-hidden
        />
      </motion.span>
    </span>
  );
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: TEXT_DELAY }}
        className="relative z-10 mt-8 flex max-w-[320px] flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center text-base font-semibold leading-snug"
      >
        <span>100 000 человек нажали</span>
        <SubscribeInline />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: RING_DELAY + 0.8 }}
        className="relative z-10 mt-4 max-w-[320px] text-center text-sm text-neutral-300"
      >
        Но на самом деле они выбрали твой стиль, твою энергию и тебя.
      </motion.p>
    </div>
  );
}
