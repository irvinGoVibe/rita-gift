"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  skipInitial?: boolean;
  skipExit?: boolean;
};

const ENTER = { opacity: 0, y: 8, scale: 0.99 };
const REST = { opacity: 1, y: 0, scale: 1 };
const LEAVE = { opacity: 0, y: -8, scale: 0.99 };

export function CardScreen({
  children,
  className = "",
  skipInitial = false,
  skipExit = false,
}: Props) {
  return (
    <motion.section
      initial={skipInitial ? false : ENTER}
      animate={REST}
      exit={skipExit ? REST : LEAVE}
      transition={{ duration: skipInitial || skipExit ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 flex flex-col ${className}`}
    >
      {children}
    </motion.section>
  );
}
