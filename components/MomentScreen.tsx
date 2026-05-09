"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { CHANNEL_NAME, FINAL_SUBSCRIBERS } from "@/lib/constants";
import { fireBurst } from "@/lib/confetti";
import { FloatingIcons } from "./FloatingIcons";
import { SilverAward } from "./SilverAward";

export function MomentScreen() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      void fireBurst();
    }, 250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 px-6">
      <FloatingIcons variant="moment" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
        >
          <SilverAward size={140} />
        </motion.div>
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-white/20 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 mt-6 text-center"
      >
        <div className="text-6xl font-black tracking-tight tabular-nums leading-none">
          {FINAL_SUBSCRIBERS}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 mt-6 text-center text-lg font-semibold"
      >
        {CHANNEL_NAME}, ты сделала это.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative z-10 mt-2 text-center text-sm text-neutral-300"
      >
        100 000 подписчиков на YouTube.
      </motion.p>
    </div>
  );
}
