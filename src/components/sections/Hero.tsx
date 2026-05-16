
import { SketchCorners } from "../SketchCorners";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-forest flex flex-col items-center justify-center px-6 pt-6 pb-8 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />
      <div className="relative z-10 max-w-md w-full text-center mx-auto">
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.9]">
          Наталья
        </h1>
        <p className="font-script text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.9]">
          и
        </p>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-cream leading-[0.9]">
          Валерий
        </h1>
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
