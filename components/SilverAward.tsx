type Props = {
  size?: number;
  className?: string;
};

export function SilverAward({ size = 140, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="sa-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f6f7" />
          <stop offset="35%" stopColor="#c9cbcf" />
          <stop offset="65%" stopColor="#9a9da3" />
          <stop offset="100%" stopColor="#5b5e64" />
        </linearGradient>
        <linearGradient id="sa-frame-inner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="sa-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2c" />
          <stop offset="100%" stopColor="#0c0c0d" />
        </linearGradient>
        <linearGradient id="sa-plate-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sa-button" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#dcdee2" />
          <stop offset="80%" stopColor="#9da0a6" />
          <stop offset="100%" stopColor="#6a6d72" />
        </linearGradient>
        <linearGradient id="sa-button-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sa-name" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1a1c" />
          <stop offset="50%" stopColor="#0a0a0b" />
          <stop offset="100%" stopColor="#1a1a1c" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="132" height="132" rx="12" fill="url(#sa-frame)" />
      <rect
        x="4"
        y="4"
        width="132"
        height="132"
        rx="12"
        fill="url(#sa-frame-inner)"
      />

      <rect x="14" y="14" width="112" height="112" rx="6" fill="url(#sa-plate)" />
      <rect
        x="14"
        y="14"
        width="112"
        height="56"
        rx="6"
        fill="url(#sa-plate-shine)"
      />

      <g>
        <rect
          x="34"
          y="40"
          width="72"
          height="50"
          rx="11"
          fill="url(#sa-button)"
        />
        <rect
          x="34"
          y="40"
          width="72"
          height="22"
          rx="11"
          fill="url(#sa-button-edge)"
        />
        <path d="M61 53 L61 77 L83 65 Z" fill="#1a1a1c" />
      </g>

      <rect x="34" y="98" width="72" height="14" rx="3" fill="url(#sa-name)" />
      <text
        x="70"
        y="108"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.2"
        fill="#9da0a6"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        RITA MARK
      </text>

      <rect
        x="4"
        y="4"
        width="132"
        height="132"
        rx="12"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.6"
      />
    </svg>
  );
}
