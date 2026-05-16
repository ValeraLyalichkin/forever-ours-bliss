import { SketchCorners } from "../SketchCorners";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* horizontal line */}
      <line x1="20" y1="30" x2="580" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      {/* left flourish */}
      <path
        d="M20 30 C 40 18, 60 18, 80 30 C 70 26, 55 26, 50 32 M 30 30 C 35 36, 45 36, 55 30"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* right flourish (mirror) */}
      <path
        d="M580 30 C 560 18, 540 18, 520 30 C 530 26, 545 26, 550 32 M 570 30 C 565 36, 555 36, 545 30"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      {/* center floral motif */}
      <g transform="translate(300 30)">
        <path
          d="M0 -22 C -8 -14, -8 -4, 0 4 C 8 -4, 8 -14, 0 -22 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M-30 0 C -22 -10, -10 -14, 0 -8 C 10 -14, 22 -10, 30 0"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-40 6 C -28 -2, -14 -2, 0 6 C 14 -2, 28 -2, 40 6"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />
        <circle cx="0" cy="-10" r="1.6" fill="currentColor" />
        <circle cx="-14" cy="-6" r="1.2" fill="currentColor" />
        <circle cx="14" cy="-6" r="1.2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-6 pb-8 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-wine mb-6">
          Приглашение на свадьбу
        </p>

        <Ornament className="w-full max-w-sm text-wine mb-4" />

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Наталья
        </h1>
        <p className="font-script text-5xl sm:text-6xl md:text-7xl text-wine leading-[1.1] my-1">
          и
        </p>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Валерий
        </h1>

        <Ornament className="w-full max-w-sm text-wine mt-4" />

        <p className="font-num text-2xl md:text-3xl tracking-[0.2em] text-wine mt-6">
          15.08.26
        </p>
      </div>
    </section>
  );
}
