"use client";

import { motion } from "motion/react";
import { CHANNEL_NAME, FINAL_SUBSCRIBERS } from "@/lib/constants";
import { ShareButtons } from "./ShareButtons";

type Props = {
  onReplay: () => void;
};

export function FinalScreen({ onReplay }: Props) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#1a0710_0%,#0a0608_55%,#020203_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_15%,rgba(255,41,66,0.22),transparent_60%)]" />
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#ff2942]/15 blur-3xl" />
      <div className="absolute -right-20 -bottom-12 h-72 w-72 rounded-full bg-rose-700/20 blur-3xl" />

      <div className="relative z-10 flex h-full w-full flex-1 flex-col px-7 pt-12 pb-[calc(env(safe-area-inset-bottom,0px)+24px)]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] uppercase tracking-[0.32em] text-white/45"
        >
          Поздравляем
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mt-2 text-[44px] font-bold leading-[0.95] tracking-tight text-white"
        >
          {CHANNEL_NAME}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="mt-1 flex items-center gap-2 text-[19px] tracking-tight text-white/75"
        >
          <span className="flex h-5 w-7 items-center justify-center rounded-[5px] bg-[#ff2942]">
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="white"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="tabular-nums">{FINAL_SUBSCRIBERS}</span>
          <span className="text-white/55">на YouTube</span>
        </motion.div>

        <div className="my-auto flex flex-col items-center justify-center py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="text-[clamp(120px,38vw,180px)] font-bold leading-[0.85] tracking-tight tabular-nums"
              style={{
                background:
                  "linear-gradient(180deg,#ffffff 0%,#ffffff 40%,rgba(255,255,255,0.55) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              100K
            </div>
            <div className="absolute inset-x-6 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#ff2942]/60 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="space-y-1 text-center text-[15px] leading-snug"
        >
          <p className="font-medium text-white">Она сделала это.</p>
          <p className="text-white/65">Я был здесь, когда это случилось.</p>
          <p className="pt-1 text-[12px] uppercase tracking-[0.22em] text-white/35">
            Следующая остановка - 1 000 000
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55 }}
          className="mt-6"
        >
          <ShareButtons />
          <button
            type="button"
            onClick={onReplay}
            className="mt-3 flex h-9 w-full items-center justify-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white/70"
            aria-label="Повторить открытку с начала"
          >
            <svg
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
            </svg>
            Повторить
          </button>
        </motion.div>
      </div>
    </div>
  );
}
