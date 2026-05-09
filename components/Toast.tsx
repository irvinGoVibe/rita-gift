"use client";

import { AnimatePresence, motion } from "motion/react";

type Props = {
  message: string | null;
};

export function Toast({ message }: Props) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute bottom-28 left-1/2 z-40 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black shadow-lg"
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
