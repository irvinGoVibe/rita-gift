export const CHANNEL_NAME = "Rita Mark";
export const CHANNEL_HANDLE = "@markofit";
export const INITIAL_SUBSCRIBERS = "99 999";
export const FINAL_SUBSCRIBERS = "100 000";
export const SENDER_NAME = "[Имя]";

export const RITA_YOUTUBE_URL = "https://www.youtube.com/@markofit";

export const SHARE_TITLE = "Rita Mark - 100 000 на YouTube";
export const SHARE_TEXT =
  "Rita Mark набрала 100 000 подписчиков. Следующая остановка - 1 000 000.";

export const SITE_URL = "https://100k.ritamark.ru";
export const SITE_NAME = "Rita Mark 100K";

export const PAGE_TITLE = "Для Rita Mark есть подарок";
export const PAGE_DESCRIPTION = "Открой момент";

export const OG_TITLE = "Для Rita Mark есть подарок";
export const OG_DESCRIPTION = "Открой момент";
export const OG_IMAGE = "/og-rita-gift.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = "Для Rita Mark есть подарок";

export const GIFT_TITLE = "Для Rita Mark есть подарок";
export const GIFT_SUBTITLE = "Потяни ленточку вверх, чтобы открыть";
export const GIFT_REVEAL = "100 000";
export const GIFT_OPENED_TITLE = "Подарок открыт";
export const GIFT_OPENED_SUBTITLE = "Запускаем поздравление";
export const GIFT_TRANSITION_MS = 2400;

export const SCREEN_DURATIONS = {
  channel: 1500,
  moment: 5000,
  notNumber: 8000,
  personal: 7000,
} as const;

export type VideoPreview = {
  title: string;
  duration: string;
  ago: string;
  thumbnail: string;
};

export type ShortPreview = {
  title: string;
  views: string;
  thumbnail: string;
};

export const SHORT_PREVIEWS: ShortPreview[] = [
  {
    title: "6:00 am in Bangkok",
    views: "1,2 млн",
    thumbnail: "/shorts/bPLo10s5BKU.jpg",
  },
  {
    title: "Силовая мобильность",
    views: "412 тыс.",
    thumbnail: "/shorts/8Nm7ISWRbS8.jpg",
  },
  {
    title: "20 min for Thigh Relief",
    views: "780 тыс.",
    thumbnail: "/shorts/nPkR_LMeBHI.jpg",
  },
  {
    title: "Рельеф и тонус",
    views: "256 тыс.",
    thumbnail: "/shorts/09yDxwK00KE.jpg",
  },
  {
    title: "Just 30 minutes",
    views: "534 тыс.",
    thumbnail: "/shorts/PlzcTOWEuh8.jpg",
  },
  {
    title: "1 year of lessons on YouTube",
    views: "1,8 млн",
    thumbnail: "/shorts/hmO3vKXDg6s.jpg",
  },
];

export const VIDEO_PREVIEWS: VideoPreview[] = [
  {
    title: "Избавляемся от отёков за 10 мин. Лимфодренажный пилатес",
    duration: "10:12",
    ago: "1 нед. назад",
    thumbnail: "/videos/BS0IWs6Y4no.jpg",
  },
  {
    title: "Мощный лимфодренажный пилатес. Как убрать отёки за 10 мин",
    duration: "10:48",
    ago: "2 нед. назад",
    thumbnail: "/videos/Ct-Sl6J5Lz8.jpg",
  },
  {
    title: "10 минут пилатес для изящных ног и икр без перекачивания",
    duration: "10:24",
    ago: "3 нед. назад",
    thumbnail: "/videos/Z1pHqPjFeaY.jpg",
  },
  {
    title: "10 мин от «домика» и выпирающего живота. Хватит качать пресс",
    duration: "10:36",
    ago: "4 нед. назад",
    thumbnail: "/videos/tytI-K0mUsU.jpg",
  },
];
