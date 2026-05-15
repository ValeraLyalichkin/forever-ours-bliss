import couple from "@/assets/couple.png";
import { SketchCorners } from "../SketchCorners";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-forest flex flex-col items-center justify-center px-6 pt-6 pb-8 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />
      <div className="relative z-10 max-w-md w-full text-center mx-auto">
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.9]">
          Наталья
        </h1>
        <div className="flex justify-center my-2 sm:my-3">
          <svg
            viewBox="0 0 100 120"
            className="w-14 sm:w-16 md:w-20 h-auto text-cream"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="and"
          >
            <path d="M70 22 C66 12, 50 10, 42 18 C34 26, 36 38, 46 48 C58 60, 76 72, 78 88 C79 100, 70 108, 58 108 C42 108, 28 96, 28 80 C28 64, 42 52, 60 46 C72 42, 82 44, 88 50" />
            <path d="M64 96 L92 110" />
          </svg>
        </div>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.9]">
          Валерий
        </h1>
      </div>

      {/* Arched couple photo */}
      <div className="relative z-10 mt-4 sm:mt-8 w-full flex justify-center">
        <img
          src={couple}
          alt="Наталья и Валерий"
          className="w-[55vw] max-w-[300px] sm:w-[68vw] sm:max-w-[340px] aspect-[3/4.4] object-cover rounded-2xl"
        />
      </div>

      {/* Date with decorative dashes */}
      <div className="relative z-10 mt-5 sm:mt-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="block w-16 h-px bg-cream/60" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em] text-cream">
            15.08.26
          </p>
          <span className="block w-16 h-px bg-cream/60" />
        </div>
        <span className="text-wine text-4xl md:text-5xl leading-none">♥</span>
      </div>
    </section>
  );
}
