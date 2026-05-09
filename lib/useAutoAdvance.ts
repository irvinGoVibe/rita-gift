"use client";

import { useEffect } from "react";

export function useAutoAdvance(
  durationMs: number | null,
  onDone: () => void,
) {
  useEffect(() => {
    if (durationMs == null) return;
    const id = window.setTimeout(onDone, durationMs);
    return () => window.clearTimeout(id);
  }, [durationMs, onDone]);
}
