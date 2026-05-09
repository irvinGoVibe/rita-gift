"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { CardScreen } from "@/components/CardScreen";
import { FinalScreen } from "@/components/FinalScreen";
import { MomentScreen } from "@/components/MomentScreen";
import { NotJustNumberScreen } from "@/components/NotJustNumberScreen";
import { PersonalScreen } from "@/components/PersonalScreen";
import { ProgressStories, type Screen } from "@/components/ProgressStories";
import { YoutubeChannelMock } from "@/components/YoutubeChannelMock";
import { useAutoAdvance } from "@/lib/useAutoAdvance";
import { SCREEN_DURATIONS } from "@/lib/constants";

const ORDER: Screen[] = [
  "channel",
  "moment",
  "notNumber",
  "personal",
  "final",
];

const SWIPE_THRESHOLD = 60;

export default function Home() {
  const [screen, setScreen] = useState<Screen>("channel");
  const [triggered, setTriggered] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((next: Screen) => setScreen(next), []);

  const goRel = useCallback(
    (delta: number) => {
      const idx = ORDER.indexOf(screen);
      const target = idx + delta;
      if (target < 0 || target >= ORDER.length) return;
      const next = ORDER[target];
      if (screen === "channel" && delta > 0 && !triggered) return;
      setScreen(next);
    },
    [screen, triggered],
  );

  const handleTrigger = useCallback(() => {
    setTriggered(true);
    window.setTimeout(() => setScreen("moment"), SCREEN_DURATIONS.channel);
  }, []);

  const handleReplay = useCallback(() => {
    setTriggered(false);
    setScreen("channel");
  }, []);

  const advanceDuration =
    screen === "moment"
      ? SCREEN_DURATIONS.moment
      : screen === "notNumber"
        ? SCREEN_DURATIONS.notNumber
        : screen === "personal"
          ? SCREEN_DURATIONS.personal
          : null;

  const next: Screen | null =
    screen === "moment"
      ? "notNumber"
      : screen === "notNumber"
        ? "personal"
        : screen === "personal"
          ? "final"
          : null;

  useAutoAdvance(advanceDuration, () => {
    if (next) goTo(next);
  });

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest("[data-noswipe]")) {
      touchStart.current = null;
      return;
    }
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
      goRel(dx < 0 ? 1 : -1);
    },
    [goRel],
  );

  return (
    <main
      className="relative mx-auto flex min-h-[100svh] w-full max-w-[430px] flex-col overflow-hidden bg-neutral-950 text-white shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ProgressStories current={screen} triggered={triggered} />

      <div className="relative flex-1">
        <AnimatePresence mode="wait">
          {screen === "channel" && (
            <CardScreen key="channel">
              <YoutubeChannelMock onTrigger={handleTrigger} />
            </CardScreen>
          )}
          {screen === "moment" && (
            <CardScreen key="moment">
              <MomentScreen />
            </CardScreen>
          )}
          {screen === "notNumber" && (
            <CardScreen key="notNumber">
              <NotJustNumberScreen />
            </CardScreen>
          )}
          {screen === "personal" && (
            <CardScreen key="personal">
              <PersonalScreen />
            </CardScreen>
          )}
          {screen === "final" && (
            <CardScreen key="final">
              <FinalScreen onReplay={handleReplay} />
            </CardScreen>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
