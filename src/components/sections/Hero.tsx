import couple from "@/assets/couple.png";
import { SketchCorners } from "../SketchCorners";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center px-6 pt-12 pb-16">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />
      <div className="relative z-10 max-w-md w-full text-center">
        <h1 className="font-script text-7xl md:text-8xl text-ink leading-[0.9]">
          Наталья
        </h1>
        <div className="font-script text-6xl md:text-7xl text-ink leading-none -mt-2">
          &amp;
        </div>
        <h1 className="font-script text-7xl md:text-8xl text-ink leading-[0.9] -mt-2">
          Валерий
        </h1>
      </div>

      {/* Arched couple photo */}
      <div className="relative z-10 mt-8 w-full flex justify-center">
        <img
          src={couple}
          alt="Наталья и Валерий"
          className="w-[68vw] max-w-[340px] aspect-[3/4.4] object-cover"
          style={{ borderRadius: "50% 50% 12px 12px / 38% 38% 8% 8%" }}
        />
      </div>

      {/* Date with decorative dashes */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="block w-16 h-px bg-ink/60" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em] text-ink">
            15.08.26
          </p>
          <span className="block w-16 h-px bg-ink/60" />
        </div>
        <span className="text-wine text-4xl md:text-5xl leading-none">♥</span>
      </div>
    </section>
  );
}
