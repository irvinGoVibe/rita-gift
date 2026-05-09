"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GIFT_SUBTITLE,
  GIFT_TITLE,
  GIFT_TRANSITION_MS,
} from "@/lib/constants";
import { fireBurst } from "@/lib/confetti";
import { ChannelTeaser } from "./ChannelTeaser";
import { GiftBox } from "./GiftBox";
import { SparkIcon } from "./icons";

const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 400;

type SparklePos = {
  top: string;
  left: string;
  size: number;
  delay: number;
};

const SPARKLES: SparklePos[] = [
  { top: "12%", left: "18%", size: 12, delay: 0 },
  { top: "20%", left: "78%", size: 10, delay: 0.5 },
  { top: "32%", left: "10%", size: 14, delay: 1.1 },
  { top: "60%", left: "85%", size: 12, delay: 0.3 },
  { top: "78%", left: "20%", size: 10, delay: 0.9 },
  { top: "70%", left: "70%", size: 12, delay: 1.4 },
  { top: "8%", left: "50%", size: 10, delay: 0.7 },
  { top: "85%", left: "50%", size: 12, delay: 1.7 },
];

type Props = {
  onOpened: () => void;
};

export function GiftOpeningScreen({ onOpened }: Props) {
  const [opened, setOpened] = useState(false);
  const y = useMotionValue(0);

  const open = useCallback(() => {
    if (opened) return;
    setOpened(true);
    animate(y, 0, { duration: 0.25, ease: "easeOut" });
    void fireBurst();
    try {
      navigator.vibrate?.(60);
    } catch {
      // ignore
    }
  }, [opened, y]);

  useEffect(() => {
    if (!opened) return;
    const id = window.setTimeout(() => onOpened(), GIFT_TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [opened, onOpened]);

  const sparkles = useMemo(() => SPARKLES, []);

  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#1a0710_0%,#0a0608_55%,#020203_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,41,66,0.22),transparent_60%)]" />
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#ff2942]/20 blur-3xl" />
      <div className="absolute -right-20 -bottom-12 h-72 w-72 rounded-full bg-rose-700/20 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute text-white/55"
            style={{ top: s.top, left: s.left }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.85, 1.1, 0.85],
              rotate: [0, 25, 0],
            }}
            transition={{
              duration: 3.4,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            <SparkIcon width={s.size} height={s.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-1 flex-col items-center px-6 pt-16 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: opened ? 0 : 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[22px] font-semibold leading-tight tracking-tight text-white"
        >
          {GIFT_TITLE}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: opened ? 0 : 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 max-w-[300px] text-center text-[13px] text-white/55"
        >
          {GIFT_SUBTITLE}
        </motion.p>

        <div className="relative my-auto flex h-[320px] w-full items-center justify-center">
          <motion.button
            type="button"
            onClick={open}
            drag={opened ? false : "y"}
            dragConstraints={{ top: -180, bottom: 0 }}
            dragElastic={0.25}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (
                info.offset.y < -SWIPE_DISTANCE ||
                info.velocity.y < -SWIPE_VELOCITY
              ) {
                open();
              } else {
                animate(y, 0, {
                  type: "spring",
                  stiffness: 260,
                  damping: 24,
                });
              }
            }}
            whileTap={opened ? undefined : { scale: 0.98 }}
            style={{ y, touchAction: opened ? "auto" : "none" }}
            disabled={opened}
            aria-label="Открыть подарок"
            className="relative cursor-grab touch-none border-0 bg-transparent p-0 outline-none active:cursor-grabbing disabled:cursor-default"
          >
            <GiftBox opened={opened} />
          </motion.button>
        </div>

        <div className="h-[64px]">
          <AnimatePresence>
            {!opened && (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-white/45"
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                  animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <path d="M12 4l-7 7h4v9h6v-9h4z" />
                </motion.svg>
                <span className="mt-1 text-[11px] uppercase tracking-[0.28em]">
                  Свайп вверх
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {opened && (
          <motion.div
            key="teaser"
            initial={{
              opacity: 0,
              scale: 0.16,
              y: 70,
              rotate: -7,
              borderRadius: 32,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0,
              borderRadius: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1.8,
              ease: [0.16, 0.84, 0.24, 1],
              opacity: { delay: 0.5, duration: 0.55, ease: "easeOut" },
              borderRadius: {
                delay: 0.5 + 1.2,
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            style={{
              transformOrigin: "center center",
              boxShadow: "0 30px 80px -10px rgba(0,0,0,0.65)",
            }}
            className="absolute inset-0 z-30 origin-center overflow-hidden"
          >
            <ChannelTeaser />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
