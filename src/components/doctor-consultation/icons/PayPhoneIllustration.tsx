/**
 * Hero illustration — a phone with a floating card and a hand pressing "PAY",
 * matching the 3D render in the Figma hero. Drawn as an SVG so it scales with
 * the banner instead of needing a fixed-size raster at every breakpoint.
 */
export function PayPhoneIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="pay-phone-body" x1="46" y1="14" x2="150" y2="168">
          <stop stopColor="#F7F5FF" />
          <stop offset="1" stopColor="#D9D2F5" />
        </linearGradient>
        <linearGradient id="pay-phone-screen" x1="58" y1="26" x2="140" y2="150">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EDE7FF" />
        </linearGradient>
        <linearGradient id="pay-card" x1="98" y1="20" x2="196" y2="74">
          <stop stopColor="#8E6BFF" />
          <stop offset="1" stopColor="#4A1FD6" />
        </linearGradient>
        <linearGradient id="pay-button" x1="62" y1="104" x2="140" y2="130">
          <stop stopColor="#7C4DFF" />
          <stop offset="1" stopColor="#4F1FE0" />
        </linearGradient>
        <linearGradient id="pay-hand" x1="120" y1="96" x2="196" y2="176">
          <stop stopColor="#5B6B9E" />
          <stop offset="1" stopColor="#2E3A63" />
        </linearGradient>
        <linearGradient id="pay-sleeve" x1="150" y1="132" x2="212" y2="180">
          <stop stopColor="#2F3C66" />
          <stop offset="1" stopColor="#1C2543" />
        </linearGradient>
      </defs>

      {/* Phone */}
      <g transform="rotate(-9 100 92)">
        <rect x="42" y="16" width="106" height="152" rx="18" fill="url(#pay-phone-body)" />
        <rect
          x="49"
          y="24"
          width="92"
          height="136"
          rx="13"
          fill="url(#pay-phone-screen)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Receipt lines */}
        <rect x="60" y="38" width="42" height="7" rx="3.5" fill="#C9BEF3" />
        <rect x="60" y="52" width="70" height="5" rx="2.5" fill="#E2DBF8" />
        <rect x="60" y="63" width="56" height="5" rx="2.5" fill="#E2DBF8" />
        {/* Pay button */}
        <rect x="60" y="100" width="70" height="28" rx="14" fill="url(#pay-button)" />
        <text
          x="95"
          y="119"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="700"
          letterSpacing="1"
        >
          PAY
        </text>
      </g>

      {/* Floating credit card */}
      <g transform="rotate(-14 150 46)">
        <rect x="108" y="18" width="88" height="56" rx="10" fill="url(#pay-card)" />
        <rect x="118" y="32" width="18" height="13" rx="3" fill="#FFD98A" opacity="0.9" />
        <rect x="118" y="54" width="46" height="5" rx="2.5" fill="#FFFFFF" opacity="0.65" />
        <rect x="170" y="52" width="16" height="9" rx="2" fill="#FFFFFF" opacity="0.4" />
      </g>

      {/* Hand pressing the button */}
      <g>
        <path
          d="M112 128c0-9 7-16 16-16h26c7 0 12-4 12-11 0-6 5-10 11-10s10 5 10 11c0 12-5 21-13 27l-9 7v14c0 8-7 15-15 15h-24c-9 0-16-7-16-16v-21Z"
          fill="url(#pay-hand)"
        />
        <path
          d="M150 154h34c10 0 18 8 18 18v10h-52v-28Z"
          fill="url(#pay-sleeve)"
        />
        <circle cx="127" cy="126" r="8" fill="#FFFFFF" opacity="0.18" />
      </g>
    </svg>
  )
}
