"use client";

import { motion } from "motion/react";

type Props = {
  opened: boolean;
};

export function GiftBox({ opened }: Props) {
  return (
    <div className="pointer-events-none relative h-[280px] w-[240px] select-none">
      <motion.div
        className="absolute -inset-14 -z-10 rounded-full bg-[#ff2942]/35 blur-3xl"
        animate={
          opened
            ? { opacity: 0.85, scale: 1.2 }
            : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 2.6, repeat: opened ? 0 : Infinity, ease: "easeInOut" }}
      />

      <div className="absolute bottom-3 left-1/2 h-[180px] w-[210px] -translate-x-1/2">
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#220812] via-[#0d0709] to-[#020203] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.75),inset_0_2px_0_rgba(255,255,255,0.08)]">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/12 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent" />

          <motion.div
            className="absolute left-1/2 top-0 h-full w-[26px] -translate-x-1/2 bg-[linear-gradient(90deg,#7a0c1f_0%,#ff2942_25%,#ff5870_50%,#ff2942_75%,#7a0c1f_100%)] shadow-[inset_0_0_4px_rgba(0,0,0,0.45)]"
            animate={{ opacity: opened ? 0 : 1, scaleY: opened ? 0.5 : 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{ transformOrigin: "bottom center" }}
          />

          {opened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.45 }}
              className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_25%,#ff5870,transparent_70%)]"
            />
          )}
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 top-[88px] h-[40px] w-[230px] -translate-x-1/2"
        initial={{ y: 0, rotate: 0, opacity: 1 }}
        animate={
          opened
            ? { y: -260, rotate: -16, opacity: 0 }
            : { y: [0, -3, 0] }
        }
        transition={
          opened
            ? { duration: 1.05, ease: [0.22, 1, 0.36, 1], opacity: { delay: 0.7, duration: 0.35 } }
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-[#220812] via-[#0d0709] to-[#020203] shadow-[0_18px_28px_-10px_rgba(0,0,0,0.7),inset_0_2px_0_rgba(255,255,255,0.1)]">
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/15 to-transparent" />
          <div className="absolute left-1/2 top-0 h-full w-[26px] -translate-x-1/2 bg-[linear-gradient(90deg,#7a0c1f_0%,#ff2942_25%,#ff5870_50%,#ff2942_75%,#7a0c1f_100%)] shadow-[inset_0_0_4px_rgba(0,0,0,0.45)]" />
        </div>

        <div className="absolute -top-[28px] left-1/2 h-[34px] w-[78px] -translate-x-1/2">
          <div className="absolute inset-y-0 left-0 w-[34px] rounded-[60%_40%_60%_40%/70%_70%_30%_30%] bg-[linear-gradient(135deg,#ff5870,#c8001a)] shadow-[0_4px_8px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.18)]" />
          <div className="absolute inset-y-0 right-0 w-[34px] rounded-[40%_60%_40%_60%/70%_70%_30%_30%] bg-[linear-gradient(225deg,#ff5870,#c8001a)] shadow-[0_4px_8px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.18)]" />
          <div className="absolute left-1/2 top-1/2 h-[18px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-b from-[#ff2942] to-[#7a0c1f] shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]" />
        </div>
      </motion.div>
    </div>
  );
}
