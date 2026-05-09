"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  RITA_YOUTUBE_URL,
  SHARE_TEXT,
  SHARE_TITLE,
} from "@/lib/constants";
import { ExternalIcon, LinkIcon, ShareIcon } from "./icons";
import { Toast } from "./Toast";

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  } catch {
    return false;
  }
}

export function ShareButtons() {
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    },
    [],
  );

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2000);
  }, []);

  const handleShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
        return;
      } catch {
        // user cancelled or failed - fall back to copy
      }
    }
    const ok = await copyToClipboard(url);
    showToast(ok ? "Ссылка скопирована" : "Не удалось скопировать");
  }, [showToast]);

  const handleCopy = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const ok = await copyToClipboard(url);
    showToast(ok ? "Ссылка скопирована" : "Не удалось скопировать");
  }, [showToast]);

  const handleOpenYoutube = useCallback(() => {
    window.open(RITA_YOUTUBE_URL, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <Toast message={toast} />
      <div className="flex flex-col gap-2.5">
        <motion.button
          type="button"
          onClick={handleShare}
          whileTap={{ scale: 0.97 }}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(239,68,68,0.7)] transition-colors hover:bg-red-500"
          aria-label="Поделиться открыткой"
        >
          <ShareIcon className="h-4 w-4" />
          Поделиться
        </motion.button>
        <motion.button
          type="button"
          onClick={handleCopy}
          whileTap={{ scale: 0.97 }}
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          aria-label="Скопировать ссылку"
        >
          <LinkIcon className="h-4 w-4" />
          Скопировать ссылку
        </motion.button>
        <motion.button
          type="button"
          onClick={handleOpenYoutube}
          whileTap={{ scale: 0.97 }}
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          aria-label="Открыть YouTube канал"
        >
          <ExternalIcon className="h-4 w-4" />
          Открыть YouTube
        </motion.button>
      </div>
    </>
  );
}
