export function DeveloperIllustration() {
  return (
    <svg
      viewBox="0 -20 440 360"
      role="img"
      aria-label="Ilustración de un escritorio con una computadora mostrando código escribiéndose"
      className="h-auto w-full overflow-visible"
    >
      <defs>
        <filter id="devGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <style>
          {`
            .dev-line { animation: var(--dev-anim) 6s linear infinite; }
            .dev-line-1 { --dev-anim: devLineW1; }
            .dev-line-2 { --dev-anim: devLineW2; }
            .dev-line-3 { --dev-anim: devLineW3; }
            .dev-line-4 { --dev-anim: devLineW4; }
            .dev-line-5 { --dev-anim: devLineW5; }
            .dev-line-6 { --dev-anim: devLineW6; }

            @keyframes devLineW1 {
              0% { width: 0; }
              8.33% { width: 64px; }
              56.67% { width: 64px; }
              61.67% { width: 0; }
              100% { width: 0; }
            }
            @keyframes devLineW2 {
              0%, 8.33% { width: 0; }
              16.67% { width: 42px; }
              61.67% { width: 42px; }
              66.67% { width: 0; }
              100% { width: 0; }
            }
            @keyframes devLineW3 {
              0%, 16.67% { width: 0; }
              25% { width: 80px; }
              66.67% { width: 80px; }
              71.67% { width: 0; }
              100% { width: 0; }
            }
            @keyframes devLineW4 {
              0%, 25% { width: 0; }
              33.33% { width: 50px; }
              71.67% { width: 50px; }
              76.67% { width: 0; }
              100% { width: 0; }
            }
            @keyframes devLineW5 {
              0%, 33.33% { width: 0; }
              41.67% { width: 68px; }
              76.67% { width: 68px; }
              81.67% { width: 0; }
              100% { width: 0; }
            }
            @keyframes devLineW6 {
              0%, 41.67% { width: 0; }
              50% { width: 30px; }
              81.67% { width: 30px; }
              86.67% { width: 0; }
              100% { width: 0; }
            }

            .dev-cursor {
              animation: devCursorPath 6s linear infinite, devCursorBlink 0.9s steps(1) infinite;
            }
            @keyframes devCursorPath {
              0%      { x: 155px; y: 124px; }
              8.33%   { x: 219px; y: 124px; }
              8.37%   { x: 155px; y: 134px; }
              16.67%  { x: 197px; y: 134px; }
              16.71%  { x: 155px; y: 144px; }
              25%     { x: 235px; y: 144px; }
              25.04%  { x: 167px; y: 154px; }
              33.33%  { x: 217px; y: 154px; }
              33.37%  { x: 155px; y: 164px; }
              41.67%  { x: 223px; y: 164px; }
              41.71%  { x: 155px; y: 174px; }
              50%     { x: 185px; y: 174px; }
              56.67%  { x: 185px; y: 174px; }
              56.71%  { x: 219px; y: 124px; }
              61.67%  { x: 155px; y: 124px; }
              61.71%  { x: 197px; y: 134px; }
              66.67%  { x: 155px; y: 134px; }
              66.71%  { x: 235px; y: 144px; }
              71.67%  { x: 155px; y: 144px; }
              71.71%  { x: 217px; y: 154px; }
              76.67%  { x: 167px; y: 154px; }
              76.71%  { x: 223px; y: 164px; }
              81.67%  { x: 155px; y: 164px; }
              81.71%  { x: 185px; y: 174px; }
              86.67%  { x: 155px; y: 174px; }
              86.71%  { x: 155px; y: 124px; }
              100%    { x: 155px; y: 124px; }
            }
            @keyframes devCursorBlink {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }

            .dev-particle { animation: devFloat var(--dev-dur, 4.5s) ease-in-out var(--dev-delay, 0s) infinite; }
            @keyframes devFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-7px); }
            }

            .dev-steam {
              transform-box: fill-box;
              transform-origin: center bottom;
              animation: devSteam 2.6s ease-out var(--dev-delay, 0s) infinite;
            }
            @keyframes devSteam {
              0% { transform: translateY(0) scaleY(1); opacity: 0.55; }
              60% { transform: translateY(-5px) scaleY(1.1); opacity: 0.3; }
              100% { transform: translateY(-10px) scaleY(1.2); opacity: 0; }
            }

            @media (prefers-reduced-motion: reduce) {
              .dev-line { animation: none; }
              .dev-cursor { display: none; }
              .dev-particle { animation: none; }
              .dev-steam { animation: none; opacity: 0.5; }
            }
          `}
        </style>
      </defs>

      {/* ambient glow */}
      <circle cx="220" cy="175" r="150" fill="var(--accent-soft)" filter="url(#devGlow)" />

      {/* floor shadow */}
      <ellipse cx="220" cy="322" rx="150" ry="12" fill="var(--fg)" opacity="0.06" />

      {/* desk surface + legs */}
      <rect x="85" y="266" width="16" height="56" fill="var(--border)" />
      <rect x="339" y="266" width="16" height="56" fill="var(--border)" />
      <rect x="60" y="250" width="320" height="16" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />

      {/* plant */}
      <path d="M98 250 L130 250 L124 226 L104 226 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
      <path d="M114 226 C 106 210, 106 194, 112 180" stroke="var(--success)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M114 226 C 120 206, 130 192, 142 184" stroke="var(--success)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M114 224 C 102 212, 94 198, 94 186" stroke="var(--success)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* coffee mug */}
      <rect x="308" y="224" width="26" height="26" rx="5" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
      <path d="M334 230 Q348 230 348 238 Q348 246 334 246" stroke="var(--border)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path className="dev-steam" style={{ ["--dev-delay" as string]: "0s" }} d="M314 218 Q318 212 314 206" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="dev-steam" style={{ ["--dev-delay" as string]: "0.7s" }} d="M324 218 Q328 212 324 206" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* monitor */}
      <rect x="192" y="241" width="56" height="9" rx="4" fill="var(--border)" />
      <rect x="213" y="190" width="14" height="51" fill="var(--border)" />
      <rect x="145" y="90" width="150" height="100" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
      <rect x="155" y="100" width="130" height="80" rx="5" fill="#1c1712" />

      {/* window controls */}
      <circle cx="163" cy="112" r="2" fill="var(--accent)" opacity="0.7" />
      <circle cx="171" cy="112" r="2" fill="var(--muted)" opacity="0.5" />
      <circle cx="179" cy="112" r="2" fill="var(--muted)" opacity="0.5" />

      {/* code lines, typed and erased one by one */}
      <rect className="dev-line dev-line-1" x="155" y="124" width="64" height="3.5" rx="1.75" fill="var(--accent)" opacity="0.85" />
      <rect className="dev-line dev-line-2" x="155" y="134" width="42" height="3.5" rx="1.75" fill="var(--muted)" opacity="0.5" />
      <rect className="dev-line dev-line-3" x="155" y="144" width="80" height="3.5" rx="1.75" fill="var(--muted)" opacity="0.5" />
      <rect className="dev-line dev-line-4" x="167" y="154" width="50" height="3.5" rx="1.75" fill="var(--accent)" opacity="0.6" />
      <rect className="dev-line dev-line-5" x="155" y="164" width="68" height="3.5" rx="1.75" fill="var(--muted)" opacity="0.5" />
      <rect className="dev-line dev-line-6" x="155" y="174" width="30" height="3.5" rx="1.75" fill="var(--accent)" opacity="0.7" />

      {/* cursor tracking the current line */}
      <rect className="dev-cursor" x="155" y="122" width="2.5" height="8" rx="1.25" fill="var(--accent)" />

      {/* floating particles */}
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "4.2s", ["--dev-delay" as string]: "0s" }} cx="110" cy="70" r="4" fill="var(--accent)" opacity="0.6" />
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "5.1s", ["--dev-delay" as string]: "0.6s" }} cx="360" cy="100" r="3" fill="var(--accent)" opacity="0.45" />
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "3.8s", ["--dev-delay" as string]: "0.3s" }} cx="340" cy="50" r="5" fill="var(--accent)" opacity="0.35" />
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "4.6s", ["--dev-delay" as string]: "1.1s" }} cx="150" cy="30" r="3" fill="var(--accent)" opacity="0.5" />
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "5.4s", ["--dev-delay" as string]: "0.2s" }} cx="330" cy="180" r="2.5" fill="var(--accent)" opacity="0.4" />
      <circle className="dev-particle" style={{ ["--dev-dur" as string]: "4s", ["--dev-delay" as string]: "0.8s" }} cx="270" cy="40" r="3" fill="var(--accent)" opacity="0.4" />
    </svg>
  );
}
