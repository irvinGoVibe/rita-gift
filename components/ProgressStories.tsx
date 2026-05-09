"use client";

import { motion } from "motion/react";
import { SCREEN_DURATIONS } from "@/lib/constants";

export type Screen =
  | "channel"
  | "moment"
  | "notNumber"
  | "personal"
  | "final";

const ORDER: Screen[] = [
  "channel",
  "moment",
  "notNumber",
  "personal",
  "final",
];

const DURATION_BY_SCREEN: Record<Screen, number> = {
  channel: SCREEN_DURATIONS.channel,
  moment: SCREEN_DURATIONS.moment,
  notNumber: SCREEN_DURATIONS.notNumber,
  personal: SCREEN_DURATIONS.personal,
  final: 0,
};

type Props = {
  current: Screen;
  triggered: boolean;
};

export function ProgressStories({ current, triggered }: Props) {
  const currentIndex = ORDER.indexOf(current);

  return (
    <div
      className="absolute top-0 left-0 right-0 z-30 flex gap-1.5 px-3 pt-3"
      role="progressbar"
      aria-label="Прогресс открытки"
      aria-valuemin={0}
      aria-valuemax={ORDER.length}
      aria-valuenow={currentIndex + 1}
    >
      {ORDER.map((screen, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isFinal = current === "final";

        let target = 0;
        if (isFinal || isPast) target = 100;
        else if (isCurrent) target = screen === "channel" && !triggered ? 0 : 100;

        const duration =
          isCurrent && (screen !== "channel" || triggered)
            ? DURATION_BY_SCREEN[screen] / 1000
            : 0;

        return (
          <div
            key={screen}
            className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: isPast ? "100%" : "0%" }}
              animate={{ width: `${target}%` }}
              transition={{ duration, ease: "linear" }}
            />
          </div>
        );
      })}
    </div>
  );
}
