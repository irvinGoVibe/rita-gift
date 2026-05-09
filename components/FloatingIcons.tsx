"use client";

import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";
import {
  CommentIcon,
  HeartIcon,
  PlayIcon,
  SparkIcon,
  ThumbIcon,
} from "./icons";

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

type FloatItem = {
  Icon: IconComp;
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
  drift: number;
};

const MOMENT_ITEMS: FloatItem[] = [
  { Icon: PlayIcon, top: "12%", left: "8%", size: 28, color: "text-red-500/80", delay: 0, drift: 14 },
  { Icon: HeartIcon, top: "22%", left: "82%", size: 22, color: "text-rose-400/80", delay: 0.6, drift: 10 },
  { Icon: ThumbIcon, top: "70%", left: "12%", size: 24, color: "text-amber-300/80", delay: 1.1, drift: 12 },
  { Icon: HeartIcon, top: "78%", left: "78%", size: 26, color: "text-red-400/80", delay: 0.4, drift: 16 },
  { Icon: SparkIcon, top: "8%", left: "55%", size: 18, color: "text-white/60", delay: 0.9, drift: 9 },
  { Icon: CommentIcon, top: "60%", left: "85%", size: 20, color: "text-sky-300/70", delay: 1.5, drift: 11 },
  { Icon: PlayIcon, top: "85%", left: "45%", size: 22, color: "text-white/50", delay: 0.2, drift: 13 },
  { Icon: SparkIcon, top: "40%", left: "92%", size: 14, color: "text-amber-200/70", delay: 1.3, drift: 8 },
];

const NOT_NUMBER_ITEMS: FloatItem[] = [
  { Icon: HeartIcon, top: "18%", left: "15%", size: 18, color: "text-rose-400/70", delay: 0, drift: 8 },
  { Icon: ThumbIcon, top: "32%", left: "85%", size: 20, color: "text-amber-300/70", delay: 0.5, drift: 10 },
  { Icon: PlayIcon, top: "75%", left: "12%", size: 22, color: "text-red-500/70", delay: 0.9, drift: 12 },
  { Icon: HeartIcon, top: "82%", left: "82%", size: 18, color: "text-rose-300/70", delay: 1.3, drift: 9 },
  { Icon: SparkIcon, top: "10%", left: "65%", size: 14, color: "text-white/50", delay: 0.4, drift: 7 },
  { Icon: CommentIcon, top: "65%", left: "88%", size: 18, color: "text-sky-300/60", delay: 1.0, drift: 11 },
];

type Props = {
  variant: "moment" | "notNumber";
};

export function FloatingIcons({ variant }: Props) {
  const items = variant === "moment" ? MOMENT_ITEMS : NOT_NUMBER_ITEMS;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, i) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={i}
            className={`absolute ${item.color} drop-shadow-lg`}
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: [0, -item.drift, 0],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            aria-hidden
          >
            <Icon width={item.size} height={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
