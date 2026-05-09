"use client";

import { motion } from "motion/react";
import { CHANNEL_NAME } from "@/lib/constants";
import { ShareButtons } from "./ShareButtons";

type Props = {
  onReplay: () => void;
};

export function FinalScreen({ onReplay }: Props) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-gradient-to-br from-red-950 via-neutral-950 to-black px-6 pt-14 pb-[calc(env(safe-area-inset-bottom,0px)+20px)]">
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-red-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-1 flex-col"
      >
        <div className="text-xs uppercase tracking-[0.25em] text-red-400/90">
          YouTube
        </div>
        <h1 className="mt-2 text-5xl font-black tracking-tight leading-[1.05]">
          {CHANNEL_NAME}
        </h1>
        <div className="mt-2 text-3xl font-bold tracking-tight tabular-nums text-white">
          100 000 на YouTube
        </div>

        <div className="mt-7 space-y-2 text-base text-neutral-200">
          <p>Она сделала это.</p>
          <p>Я был здесь, когда это случилось.</p>
        </div>

        <div className="mt-6 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-200 backdrop-blur">
          Следующая остановка - 1 000 000
        </div>

        <div className="mt-auto pt-8">
          <ShareButtons />
          <button
            type="button"
            onClick={onReplay}
            className="mt-4 block w-full text-center text-xs text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
            aria-label="Повторить открытку с начала"
          >
            Повторить с начала
          </button>
        </div>
      </motion.div>
    </div>
  );
}
