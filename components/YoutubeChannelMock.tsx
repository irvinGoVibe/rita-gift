"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  CHANNEL_HANDLE,
  CHANNEL_NAME,
  FINAL_SUBSCRIBERS,
  INITIAL_SUBSCRIBERS,
  SHORT_PREVIEWS,
  VIDEO_PREVIEWS,
} from "@/lib/constants";
import { fireConfetti } from "@/lib/confetti";
import { BellIcon, CheckBadgeIcon, PlayIcon, ShortsIcon } from "./icons";

type Props = {
  onTrigger: () => void;
};

export function YoutubeChannelMock({ onTrigger }: Props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    void fireConfetti();
    try {
      navigator.vibrate?.(80);
    } catch {
      // ignore
    }
    onTrigger();
  };

  const subscribers = clicked ? FINAL_SUBSCRIBERS : INITIAL_SUBSCRIBERS;

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-neutral-950 pt-9">
      <div className="relative h-[120px] w-full overflow-hidden">
        <Image
          src="/rita-cover.jpg"
          alt=""
          fill
          priority
          sizes="430px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-neutral-950" />
      </div>

      <div className="relative -mt-8 px-5">
        <div className="flex items-end gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-neutral-950 bg-neutral-800">
            <Image
              src="/rita-avatar.jpg"
              alt={CHANNEL_NAME}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="pb-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold leading-tight tracking-tight">
                {CHANNEL_NAME}
              </h1>
              <CheckBadgeIcon className="h-4 w-4 text-neutral-300" />
            </div>
            <p className="text-xs text-neutral-400">{CHANNEL_HANDLE}</p>
          </div>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={subscribers}
              initial={{ scale: 0.8, opacity: 0, y: 6 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.1, opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`font-bold tabular-nums ${
                clicked ? "text-3xl text-white" : "text-2xl text-white"
              }`}
            >
              {subscribers}
            </motion.span>
          </AnimatePresence>
          <span className="text-sm text-neutral-400">подписчиков</span>
        </div>

        <p className="mt-2 text-sm text-neutral-400">
          Остался один шаг до 100 000.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="relative flex-1">
            {!clicked && (
              <>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-red-500"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: [1, 1.18, 1.32], opacity: [0.55, 0.25, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  }}
                />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-red-500"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: [1, 1.18, 1.32], opacity: [0.45, 0.2, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1.6,
                  }}
                />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-red-500 blur-xl"
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </>
            )}
            <motion.button
              type="button"
              onClick={handleClick}
              disabled={clicked}
              whileTap={{ scale: clicked ? 1 : 0.96 }}
              animate={
                clicked
                  ? { scale: 1 }
                  : { scale: [1, 1.04, 1] }
              }
              transition={
                clicked
                  ? { duration: 0.2 }
                  : {
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }
              }
              aria-label={clicked ? "Сделано" : "Стать 100 000-м подписчиком"}
              className={`relative z-10 flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${
                clicked
                  ? "bg-white text-black"
                  : "bg-red-600 text-white shadow-[0_8px_24px_-8px_rgba(239,68,68,0.7)] hover:bg-red-500"
              }`}
            >
              {clicked ? (
                <>
                  <BellIcon className="h-4 w-4" />
                  <span>100 000!</span>
                </>
              ) : (
                <span>Стать 100 000-м</span>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1 overflow-hidden">
        <div className="mb-2 px-5 text-xs uppercase tracking-wider text-neutral-500">
          Последние видео
        </div>
        <div
          data-noswipe
          className="flex gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {VIDEO_PREVIEWS.map((v, i) => (
            <div key={i} className="w-40 shrink-0">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={v.thumbnail}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-medium tabular-nums">
                  {v.duration}
                </div>
              </div>
              <div className="mt-2 line-clamp-2 text-xs font-medium leading-snug">
                {v.title}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500">{v.ago}</div>
            </div>
          ))}
        </div>

        <div className="mb-2 mt-2 flex items-center gap-1.5 px-5 text-xs uppercase tracking-wider text-neutral-500">
          <ShortsIcon className="h-3.5 w-3.5 text-red-500" />
          <span>Shorts</span>
        </div>
        <div
          data-noswipe
          className="flex gap-2.5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SHORT_PREVIEWS.map((s, i) => (
            <div key={i} className="w-[110px] shrink-0">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={s.thumbnail}
                  alt=""
                  fill
                  sizes="110px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2">
                  <div className="line-clamp-2 text-[10px] font-semibold leading-tight text-white">
                    {s.title}
                  </div>
                  <div className="mt-0.5 flex items-center gap-1 text-[9px] text-white/75">
                    <PlayIcon className="h-2.5 w-2.5" />
                    <span>{s.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
