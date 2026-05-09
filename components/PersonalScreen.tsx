"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CHANNEL_NAME, SENDER_NAME } from "@/lib/constants";

const LINES = [
  "Это не просто красивая цифра.",
  "Это результат твоей работы, регулярности, вкуса и силы.",
  "Горжусь тобой.",
  "Дальше - больше.",
];

export function PersonalScreen() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-950 via-amber-950 to-neutral-950 px-7">
      <div className="pointer-events-none absolute -left-20 -top-10 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-6 h-20 w-20 overflow-hidden rounded-full border-2 border-white/20 shadow-xl"
      >
        <Image
          src="/rita-avatar.jpg"
          alt={CHANNEL_NAME}
          fill
          sizes="80px"
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        {LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.35 }}
            className={
              i === 2 || i === 3
                ? "text-lg font-semibold"
                : "text-base text-neutral-200"
            }
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.1 }}
        className="relative z-10 mt-8 text-sm text-neutral-400"
      >
        С любовью, {SENDER_NAME}
      </motion.p>
    </div>
  );
}
