import React from 'react';

/**
 * Hand-drawn SVG doodle assets inspired by the streetwear reference image.
 */

export const StarDoodle: React.FC<{
  className?: string;
  fill?: string;
  stroke?: string;
  size?: number;
}> = ({ className = '', fill = '#FFD329', stroke = '#111111', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none transition-transform ${className}`}
  >
    <path
      d="M20 2C21.2 11.8 28.2 18.8 38 20C28.2 21.2 21.2 28.2 20 38C18.8 28.2 11.8 21.2 2 20C11.8 18.8 18.8 11.8 20 2Z"
      fill={fill}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const FivePointStarDoodle: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#111111', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M18 3L22.5 12.5L33 14L25.5 21.5L27.5 32L18 27L8.5 32L10.5 21.5L3 14L13.5 12.5L18 3Z"
      fill="transparent"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScratchDoodle: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#111111', size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M6 26L14 6M14 26L22 6M22 26L28 10"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowDoodle: React.FC<{
  className?: string;
  color?: string;
  direction?: 'down-right' | 'right' | 'curved';
}> = ({ className = '', color = '#FF6418', direction = 'curved' }) => {
  if (direction === 'curved') {
    return (
      <svg
        width="54"
        height="44"
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none ${className}`}
      >
        <path
          d="M4 8C14 6 34 8 42 28M42 28L32 25M42 28L46 17"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="44"
      height="32"
      viewBox="0 0 44 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M3 16H38M38 16L26 5M38 16L26 27"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SmileyDoodle: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#111111', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <circle cx="20" cy="20" r="17" stroke={color} strokeWidth="2.5" />
    <circle cx="14" cy="16" r="2.2" fill={color} />
    <circle cx="26" cy="16" r="2.2" fill={color} />
    <path
      d="M13 25C15 28.5 25 28.5 27 25"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const StarburstBadge: React.FC<{
  textTop?: string;
  textBottom?: string;
  className?: string;
  bg?: string;
}> = ({
  textTop = 'GOOD IDEAS.',
  textBottom = 'BETTER CONTENT.',
  className = '',
  bg = '#FFD329'
}) => (
  <div
    className={`relative inline-flex items-center justify-center p-5 select-none transition-transform hover:rotate-6 cursor-pointer ${className}`}
    title="Streetwear Pop Art Badge"
  >
    <svg
      className="absolute inset-0 w-full h-full drop-shadow-[3px_4px_0px_#111111]"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70 2L85 24L110 14L114 40L138 48L128 72L138 96L114 104L110 130L85 120L70 142L55 120L30 130L26 104L2 96L12 72L2 48L26 40L30 14L55 24L70 2Z"
        fill={bg}
        stroke="#111111"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
    <div className="relative z-10 text-center font-marker text-[#111111] leading-tight text-xs tracking-tight uppercase">
      <div>{textTop}</div>
      <div>{textBottom}</div>
    </div>
  </div>
);

export const SquiggleDivider: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#111111' }) => (
  <svg
    width="100%"
    height="18"
    viewBox="0 0 600 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={`select-none ${className}`}
  >
    <path
      d="M0 9 Q 25 1 50 9 T 100 9 T 150 9 T 200 9 T 250 9 T 300 9 T 350 9 T 400 9 T 450 9 T 500 9 T 550 9 T 600 9"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
