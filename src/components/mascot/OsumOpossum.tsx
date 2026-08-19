import React from 'react';

export type OpossumState = 
  | 'default' 
  | 'waving' 
  | 'curious' 
  | 'hanging_upside_down' 
  | 'playing_dead' 
  | 'coding' 
  | 'celebrating' 
  | 'whispering';

interface OsumOpossumProps {
  state?: OpossumState;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  interactive?: boolean;
  speechBubble?: string;
}

export const OsumOpossum: React.FC<OsumOpossumProps> = ({
  state = 'default',
  className = '',
  size = 'md',
  onClick,
  interactive = false,
  speechBubble,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
  };

  const isDead = state === 'playing_dead';
  const isHanging = state === 'hanging_upside_down';

  return (
    <div 
      className={`relative inline-flex flex-col items-center select-none ${interactive ? 'cursor-pointer group' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Optional Speech Bubble */}
      {speechBubble && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-slate-950 font-medium text-xs py-1 px-3 rounded-full shadow-lg border border-amber-300 pointer-events-none z-30 animate-bounce">
          {speechBubble}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45" />
        </div>
      )}

      {/* SVG Opossum Graphic */}
      <div 
        className={`${sizeMap[size]} transition-all duration-300 ${
          isHanging ? 'rotate-180 origin-top' : ''
        } ${isDead ? 'rotate-90 grayscale opacity-75 translate-y-2' : 'group-hover:scale-105'}`}
      >
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md overflow-visible"
        >
          {/* Prehensile Tail */}
          <path
            d={
              isHanging 
                ? "M60 100 C75 110, 85 95, 80 80 C75 65, 85 50, 95 40"
                : isDead
                ? "M25 80 C15 85, 10 95, 18 102 C25 108, 35 105, 30 95"
                : "M30 82 C15 75, 5 90, 12 104 C18 114, 30 110, 26 96"
            }
            stroke="#f472b6"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={!isDead ? "animate-tail" : ""}
          />

          {/* Opossum Body */}
          <ellipse 
            cx="60" 
            cy="70" 
            rx="32" 
            ry="26" 
            fill="#475569" 
            stroke="#1e293b" 
            strokeWidth="3"
          />
          {/* Belly highlight */}
          <ellipse 
            cx="60" 
            cy="72" 
            rx="22" 
            ry="18" 
            fill="#94a3b8" 
          />

          {/* Left Ear */}
          <g className={!isDead ? "animate-ear" : ""}>
            <ellipse cx="38" cy="38" rx="10" ry="12" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
            <ellipse cx="38" cy="38" rx="6" ry="8" fill="#f472b6" />
          </g>

          {/* Right Ear */}
          <g className={!isDead ? "animate-ear" : ""}>
            <ellipse cx="82" cy="38" rx="10" ry="12" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
            <ellipse cx="82" cy="38" rx="6" ry="8" fill="#f472b6" />
          </g>

          {/* Head / White Face */}
          <path
            d="M38 52 C35 34, 85 34, 82 52 C80 68, 60 76, 60 76 C60 76, 40 68, 38 52 Z"
            fill="#f8fafc"
            stroke="#1e293b"
            strokeWidth="3"
          />

          {/* Distinctive Opossum Dark Eye Mask Stripes */}
          <path
            d="M44 44 C42 48, 43 55, 48 57 C50 54, 49 46, 44 44 Z"
            fill="#334155"
          />
          <path
            d="M76 44 C78 48, 77 55, 72 57 C70 54, 71 46, 76 44 Z"
            fill="#334155"
          />

          {/* Forehead central streak */}
          <path
            d="M59 36 L61 36 L60 52 Z"
            fill="#64748b"
          />

          {/* Eyes */}
          {isDead ? (
            // X Eyes for Playing Dead
            <g stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round">
              <line x1="45" y1="48" x2="51" y2="54" />
              <line x1="51" y1="48" x2="45" y2="54" />
              <line x1="69" y1="48" x2="75" y2="54" />
              <line x1="75" y1="48" x2="69" y2="54" />
            </g>
          ) : state === 'waving' || state === 'celebrating' ? (
            // Joyful Happy Arcs
            <g stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round">
              <path d="M44 51 Q48 45 52 51" fill="none" />
              <path d="M68 51 Q72 45 76 51" fill="none" />
              {/* Cheek blush */}
              <ellipse cx="42" cy="56" rx="3.5" ry="2" fill="#f472b6" opacity="0.6" />
              <ellipse cx="78" cy="56" rx="3.5" ry="2" fill="#f472b6" opacity="0.6" />
            </g>
          ) : (
            // Curious Big Shiny Eyes
            <g>
              <circle cx="48" cy="50" r="4.5" fill="#090d16" />
              <circle cx="46.5" cy="48.5" r="1.6" fill="#ffffff" />
              <circle cx="72" cy="50" r="4.5" fill="#090d16" />
              <circle cx="70.5" cy="48.5" r="1.6" fill="#ffffff" />
            </g>
          )}

          {/* Snout & Pink Nose */}
          <polygon points="56,66 64,66 60,71" fill="#f472b6" stroke="#db2777" strokeWidth="1" />
          <path d="M60 71 Q58 74 55 73 M60 71 Q62 74 65 73" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />

          {/* Whiskers */}
          <g stroke="#64748b" strokeWidth="1.2" strokeLinecap="round">
            <line x1="36" y1="62" x2="22" y2="59" />
            <line x1="36" y1="65" x2="21" y2="66" />
            <line x1="37" y1="68" x2="24" y2="72" />
            <line x1="84" y1="62" x2="98" y2="59" />
            <line x1="84" y1="65" x2="99" y2="66" />
            <line x1="83" y1="68" x2="96" y2="72" />
          </g>

          {/* Little Paws / Hands */}
          {state === 'waving' ? (
            <g className="animate-bounce">
              <ellipse cx="36" cy="74" rx="5" ry="6" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              <ellipse cx="88" cy="44" rx="6" ry="5" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
              {/* Little claws */}
              <circle cx="89" cy="38" r="1.2" fill="#ffffff" />
              <circle cx="92" cy="40" r="1.2" fill="#ffffff" />
            </g>
          ) : (
            <g>
              <ellipse cx="44" cy="78" rx="5" ry="5" fill="#f472b6" stroke="#db2777" strokeWidth="1.2" />
              <ellipse cx="76" cy="78" rx="5" ry="5" fill="#f472b6" stroke="#db2777" strokeWidth="1.2" />
            </g>
          )}

          {/* Feet */}
          <ellipse cx="38" cy="94" rx="7" ry="4" fill="#f472b6" stroke="#db2777" strokeWidth="1.2" />
          <ellipse cx="82" cy="94" rx="7" ry="4" fill="#f472b6" stroke="#db2777" strokeWidth="1.2" />
        </svg>
      </div>

      {interactive && !speechBubble && (
        <span className="text-[10px] text-amber-400/80 font-mono tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {isDead ? 'WAKE UP!' : 'POKE ME'}
        </span>
      )}
    </div>
  );
};
