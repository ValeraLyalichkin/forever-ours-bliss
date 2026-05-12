import { Reveal } from "../Reveal";

export function Invitation() {
  return (
    <section className="relative bg-forest text-cream py-24 px-4">
      <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-8 text-cream">
          Дорогие родные и близкие!
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-cream tracking-wide font-light">
          С особой радостью и волнением приглашаем Вас разделить с нами самый важный день в нашей жизни — день, с которого начинается наша семья
        </p>
      </Reveal>
    </section>
  );
}
