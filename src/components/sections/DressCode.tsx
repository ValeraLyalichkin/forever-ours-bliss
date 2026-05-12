import { Reveal } from "../Reveal";

const colors = [
  { hex: "#2F4156", name: "Navy" },
  { hex: "#5A7493", name: "Twilight" },
  { hex: "#8BA3C5", name: "Cornflower" },
  { hex: "#C8D9E6", name: "Sky Blue" },
  { hex: "#41312A", name: "Espresso" },
  { hex: "#402D21", name: "Cocoa" },
  { hex: "#AC8266", name: "Caramel" },
  { hex: "#CFB59E", name: "Almond" },
];

export function DressCode() {
  return (
    <section className="relative bg-cream py-20 px-4">
      <Reveal className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="font-script text-5xl md:text-6xl text-wine">Дресс-код</p>
        <p className="mt-6 max-w-xl mx-auto text-ink/75 leading-relaxed">
          Мы будем искренне рады, если в своих образах вы учтёте цветовую гамму нашего праздника
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
          {colors.map((c) => (
            <div key={c.hex} className="flex flex-col items-center">
              <div
                className="w-full aspect-square rounded-2xl shadow-md border border-ink/10"
                style={{ background: c.hex }}
              />
              <p className="mt-2 text-[11px] font-medium text-ink/80 uppercase tracking-wider">{c.name}</p>
              <p className="text-[10px] text-ink/50 font-mono">{c.hex}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-xl mx-auto text-ink/75 leading-relaxed">
          Для своего удобства также можете взять с собой сменную обувь. Главное, чтобы вы себя чувствовали комфортно и уютно на нашем торжестве!
        </p>
      </Reveal>
    </section>
  );
}
