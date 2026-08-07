/** Husain family crest — India roots: Burhanpur (Tapti river / fort) & Ahmedabad (jali / textile) */
export default function FamilyCrest({ className = '', size = 64, title = 'Husain Family Crest' }) {
  const id = 'hfh-crest'
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e4a8" />
          <stop offset="45%" stopColor="#e8d48b" />
          <stop offset="100%" stopColor="#c9a84a" />
        </linearGradient>
        <linearGradient id={`${id}-green`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#2d6a4f" />
          <stop offset="100%" stopColor="#14352a" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#1b4332" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14352a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer seal */}
      <circle cx="100" cy="100" r="96" fill={`url(#${id}-green)`} />
      <circle cx="100" cy="100" r="96" fill={`url(#${id}-glow)`} />
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2.5"
      />
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="0.75"
        strokeDasharray="2 3.5"
        opacity="0.75"
      />

      {/* Ahmedabad-inspired jali ring */}
      <g fill={`url(#${id}-gold)`} opacity="0.9">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180
          const x = 100 + Math.cos(rad) * 78
          const y = 100 + Math.sin(rad) * 78
          return <circle key={deg} cx={x} cy={y} r="2.2" />
        })}
      </g>

      {/* Shield */}
      <path
        d="M100 38c18 8 34 10 48 12v46c0 28-20 48-48 66-28-18-48-38-48-66V50c14-2 30-4 48-12z"
        fill="#1b4332"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2"
      />

      {/* Twin peacocks (facing) — stylized */}
      <g fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.6" strokeLinecap="round">
        {/* Left bird */}
        <path d="M78 88c-8-2-14 4-12 12 2 6 8 8 14 6" />
        <path d="M70 92c-4-10 2-18 10-16" />
        <path d="M68 86c-6-4-4-12 2-14" opacity="0.7" />
        <circle cx="80" cy="84" r="1.5" fill={`url(#${id}-gold)`} stroke="none" />
        {/* Right bird */}
        <path d="M122 88c8-2 14 4 12 12-2 6-8 8-14 6" />
        <path d="M130 92c4-10-2-18-10-16" />
        <path d="M132 86c6-4 4-12-2-14" opacity="0.7" />
        <circle cx="120" cy="84" r="1.5" fill={`url(#${id}-gold)`} stroke="none" />
      </g>

      {/* Central lotus — India */}
      <g fill={`url(#${id}-gold)`}>
        <ellipse cx="100" cy="118" rx="18" ry="6" opacity="0.35" />
        <path d="M100 104c4 6 10 10 16 12-8 2-14 6-16 12-2-6-8-10-16-12 6-2 12-6 16-12z" />
        <path
          d="M100 108c2 4 6 7 10 8-5 1-8 4-10 8-2-4-5-7-10-8 4-1 8-4 10-8z"
          opacity="0.85"
        />
        <path d="M92 112c3-5 6-7 8-8 2 1 5 3 8 8-3 1-5 2-8 2s-5-1-8-2z" opacity="0.7" />
      </g>

      {/* Burhanpur — Tapti river wave under lotus */}
      <path
        d="M72 132c8-6 16-6 24 0s16 6 24 0 16-6 24 0"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M76 138c7-5 14-5 20 0s14 5 20 0 14-5 20 0"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Monogram */}
      <text
        x="100"
        y="72"
        textAnchor="middle"
        fill={`url(#${id}-gold)`}
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        HFH
      </text>

      {/* Heritage ribbon text */}
      <path id={`${id}-arc`} d="M42 148a62 62 0 0 0 116 0" fill="none" />
      <text
        fill={`url(#${id}-gold)`}
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '9px',
          fontWeight: 600,
          letterSpacing: '0.22em',
        }}
      >
        <textPath href={`#${id}-arc`} startOffset="50%" textAnchor="middle">
          BURHANPUR · AHMEDABAD
        </textPath>
      </text>
    </svg>
  )
}
