import { Reveal } from "../Reveal";
import hotel from "@/assets/hotel.webp";

export function Venue() {
  const address = "Республика Мордовия, г. Саранск, ул. Республиканская, д. 103";
  const yandexUrl = `https://yandex.ru/maps/?rtext=~${encodeURIComponent("Саранск, Республиканская 103")}&rtt=auto`;

  return (
    <section className="relative bg-forest text-cream py-24 px-4 overflow-hidden">
      <img
        src="/lace-top.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-auto opacity-90 z-0"
      />
      <img
        src="/lace-bottom.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-0 w-full h-auto opacity-90 z-0 rotate-180"
      />
      <Reveal className="relative z-10 max-w-3xl mx-auto text-center pt-16 md:pt-24 pb-16 md:pb-20">
        <p className="font-script text-5xl md:text-6xl mb-2">Место проведения</p>
        <h3 className="font-display text-3xl md:text-4xl mb-2">AZIMUT Отель</h3>
        <p className="text-cream/80 mb-8 max-w-md mx-auto">{address}</p>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-cream/20">
          <img
            src={hotel}
            alt="AZIMUT Отель Саранск"
            className="w-full h-72 md:h-[28rem] object-cover"
            loading="lazy"
          />
        </div>

        <a
          href={yandexUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block mt-8 px-8 py-3 bg-cream text-forest font-medium tracking-wide uppercase text-sm rounded-full hover:bg-blush transition-colors"
        >
          Построить маршрут
        </a>
      </Reveal>
    </section>
  );
}
