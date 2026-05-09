"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { CHANNEL_NAME } from "@/lib/constants";
import { fireBurst } from "@/lib/confetti";
import { FloatingIcons } from "./FloatingIcons";

const RIBBON_COLORS = [
  "bg-[#ff2942]",
  "bg-[#ff5870]",
  "bg-[#ffd1d8]",
  "bg-[#ffb800]",
  "bg-white",
  "bg-rose-300",
];

type Ribbon = {
  left: string;
  delay: number;
  duration: number;
  rotate: number;
  color: string;
  width: number;
  height: number;
};

function buildRibbons(): Ribbon[] {
  const seeds = [
    7, 19, 28, 41, 53, 64, 73, 82, 11, 33, 47, 58, 69, 88, 92, 4,
  ];
  return seeds.map((s, i) => ({
    left: `${s}%`,
    delay: (i % 6) * 0.45,
    duration: 5 + (i % 4) * 1.1,
    rotate: ((s * 7) % 60) - 30,
    color: RIBBON_COLORS[i % RIBBON_COLORS.length],
    width: 4 + (i % 3) * 2,
    height: 10 + (i % 4) * 4,
  }));
}

export function PersonalScreen() {
  const ribbons = useMemo(() => buildRibbons(), []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      void fireBurst();
    }, 350);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a0d10_0%,#0c0a0d_60%,#080608_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(60%_70%_at_50%_0%,rgba(255,88,112,0.25),transparent_70%)]" />

      <FloatingIcons variant="personal" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {ribbons.map((r, i) => (
          <motion.span
            key={i}
            className={`absolute -top-6 ${r.color} rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.15)]`}
            style={{
              left: r.left,
              width: r.width,
              height: r.height,
              rotate: `${r.rotate}deg`,
            }}
            initial={{ y: -40, opacity: 0 }}
            animate={{
              y: ["-10%", "120%"],
              opacity: [0, 1, 1, 0],
              rotate: [`${r.rotate}deg`, `${r.rotate + 180}deg`],
            }}
            transition={{
              duration: r.duration,
              delay: r.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center justify-center px-7">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[120px] w-[120px]"
        >
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,#ff5870,#ff2942,#7a0c1f,#3a0a14,#ff5870)] p-[3px]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-950">
              <Image
                src="/rita-avatar.jpg"
                alt={CHANNEL_NAME}
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 -z-10 rounded-full bg-[#ff2942]/20 blur-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-9 max-w-[320px] space-y-3 text-center text-[15.5px] leading-snug text-white/75"
        >
          <p>Это не просто красивая цифра.</p>
          <p>Это результат твоей работы, регулярности, вкуса и силы.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.45 }}
          className="mt-5 text-[22px] font-semibold tracking-tight text-white"
        >
          Горжусь тобой.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.45 }}
          className="mt-1 text-[15px] text-white/60"
        >
          Дальше - больше.
        </motion.p>
      </div>
    </div>
  );
}
