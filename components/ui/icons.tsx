'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
   <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying glass handle with a soft rainbow gradient */}
      <path
        d="M68.75 68.75L90.625 90.625"
        stroke="url(#softRainbowGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Magnifying glass circle with a soft rainbow gradient */}
      <circle
        cx="43.75"
        cy="43.75"
        r="31.25"
        stroke="url(#softRainbowGradient)"
        strokeWidth="10"
      />

      {/* Soft rainbow gradient definition */}
      <defs>
        <linearGradient
          id="softRainbowGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: '#FFC0CB', stopOpacity: 1 }} /> {/* Soft Pink */}
          <stop offset="25%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /> {/* Soft Sky Blue */}
          <stop offset="50%" style={{ stopColor: '#98FB98', stopOpacity: 1 }} /> {/* Soft Pale Green */}
          <stop offset="75%" style={{ stopColor: '#FFFF99', stopOpacity: 1 }} /> {/* Soft Yellow */}
          <stop offset="100%" style={{ stopColor: '#E6E6FA', stopOpacity: 1 }} /> {/* Soft Lavender */}
        </linearGradient>
      </defs>

      {/* Text "AI" inside the magnifying glass with a semi-transparent fill */}
      <text
        x="43.75"
        y="50"
        textAnchor="middle"
        alignmentBaseline="central"
        fill="#FFFFFF"
        fillOpacity="0.8"
        fontSize="30"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        AI
      </text>
    </svg>
  );
};

export { IconLogo }
