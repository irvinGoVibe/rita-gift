import Image from "next/image";
import {
  CHANNEL_HANDLE,
  CHANNEL_NAME,
  INITIAL_SUBSCRIBERS,
  SHORT_PREVIEWS,
  VIDEO_PREVIEWS,
} from "@/lib/constants";
import { CheckBadgeIcon, ShortsIcon } from "./icons";

export function ChannelTeaser() {
  return (
    <div className="flex h-full w-full flex-col bg-neutral-950 pt-9">
      <div className="relative h-[120px] w-full overflow-hidden">
        <Image
          src="/rita-cover.jpg"
          alt=""
          fill
          sizes="430px"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-neutral-950" />
      </div>

      <div className="relative -mt-8 px-5">
        <div className="flex items-end gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-neutral-950 bg-neutral-800">
            <Image
              src="/rita-avatar.jpg"
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="pb-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
                {CHANNEL_NAME}
              </h1>
              <CheckBadgeIcon className="h-4 w-4 text-neutral-300" />
            </div>
            <p className="text-xs text-neutral-400">{CHANNEL_HANDLE}</p>
          </div>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold tabular-nums text-white">
            {INITIAL_SUBSCRIBERS}
          </span>
          <span className="text-sm text-neutral-400">подписчиков</span>
        </div>

        <p className="mt-2 text-sm text-neutral-400">
          Остался один шаг до 100 000.
        </p>

        <div className="mt-4 flex">
          <div className="flex h-11 flex-1 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(239,68,68,0.7)]">
            Стать 100 000-м
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1 overflow-hidden">
        <div className="mb-2 px-5 text-xs uppercase tracking-wider text-neutral-500">
          Последние видео
        </div>
        <div className="flex gap-3 px-5 pb-4">
          {VIDEO_PREVIEWS.slice(0, 3).map((v, i) => (
            <div key={i} className="w-32 shrink-0">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={v.thumbnail}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-cover"
                />
                <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-[9px] font-medium tabular-nums text-white">
                  {v.duration}
                </div>
              </div>
              <div className="mt-1.5 line-clamp-2 text-[11px] font-medium leading-snug text-white">
                {v.title}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-2 mt-2 flex items-center gap-1.5 px-5 text-xs uppercase tracking-wider text-neutral-500">
          <ShortsIcon className="h-3.5 w-3.5 text-red-500" />
          <span>Shorts</span>
        </div>
        <div className="flex gap-2.5 px-5 pb-4">
          {SHORT_PREVIEWS.slice(0, 4).map((s, i) => (
            <div key={i} className="w-[88px] shrink-0">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={s.thumbnail}
                  alt=""
                  fill
                  sizes="88px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-1.5">
                  <div className="line-clamp-2 text-[9px] font-semibold leading-tight text-white">
                    {s.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
