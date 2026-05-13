import { useState } from "react";
import mapUrl from "@/assets/ukraine-map.svg";
import { PartnerModal } from "./PartnerModal";

const cities: { name: string; x: number; y: number; capital?: boolean }[] = [
  { name: "Київ", x: 46.8, y: 24.1, capital: true },
  { name: "Харків", x: 78.2, y: 29.8 },
  { name: "Одеса", x: 48.0, y: 73.2 },
  { name: "Дніпро", x: 71.6, y: 48.6 },
  { name: "Запоріжжя", x: 72.2, y: 56.3 },
  { name: "Львів", x: 11.2, y: 31.6 },
  { name: "Кривий Ріг", x: 62.6, y: 55.4 },
  { name: "Миколаїв", x: 54.9, y: 67.0 },
  { name: "Вінниця", x: 35.5, y: 39.1 },
  { name: "Херсон", x: 58.4, y: 71.1 },
  { name: "Полтава", x: 69.0, y: 34.7 },
  { name: "Чернігів", x: 51.0, y: 13.5 },
  { name: "Черкаси", x: 55.3, y: 36.5 },
  { name: "Хмельницький", x: 27.4, y: 36.8 },
  { name: "Житомир", x: 36.6, y: 26.5 },
  { name: "Суми", x: 70.3, y: 18.4 },
  { name: "Рівне", x: 23.4, y: 22.0 },
  { name: "Івано-Франківськ", x: 14.9, y: 43.0 },
  { name: "Тернопіль", x: 19.7, y: 35.2 },
  { name: "Кропивницький", x: 56.4, y: 48.0 },
  { name: "Луцьк", x: 18.4, y: 20.4 },
  { name: "Ужгород", x: 3.5, y: 46.7 },
  { name: "Кам'янське", x: 69.3, y: 47.9 },
];

export function CoverageMap() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="coverage" className="bg-[#222220] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Географія техніки</h2>
        </div>

        {/* City tags */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {cities.map((c) => (
            <span key={c.name} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#141413]">
              {c.name}
            </span>
          ))}
        </div>

        {/* Map */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: 800, aspectRatio: "1024 / 688" }}
            onMouseLeave={() => setActive(null)}
          >
            <div
              aria-label="Карта України"
              role="img"
              className="absolute inset-0 h-full w-full"
              style={{
                backgroundColor: "#393735",
                WebkitMaskImage: `url(${mapUrl})`,
                maskImage: `url(${mapUrl})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            {cities.map((c) => {
              const size = c.capital ? 16 : 10;
              const isActive = active === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onMouseEnter={() => setActive(c.name)}
                  onClick={() => setActive(isActive ? null : c.name)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  aria-label={c.name}
                >
                  <span
                    className="block rounded-full bg-[#3B9EFF] ring-2 ring-white/30 shadow-md transition-transform hover:scale-150"
                    style={{ width: size, height: size }}
                  />
                  {c.capital && (
                    <span
                      className="absolute -z-10 animate-ping rounded-full bg-[#3B9EFF]/30"
                      style={{ width: 28, height: 28, left: -6, top: -6 }}
                    />
                  )}
                  {isActive && (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-semibold text-[#141413] shadow-lg">
                      {c.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-white/70">
            Не знайшли ваше місто?{" "}
            <a href="tel:0800750707" className="font-semibold text-[#0099F7] underline-offset-4 hover:underline">
              Зв'яжіться з нами
            </a>{" "}
            — ми знайдемо рішення!
          </p>
        </div>

        {/* Partner banner — blue */}
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl bg-[#0099F7]">
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-extrabold text-white md:text-2xl">
                Маєте спецтехніку? Здавайте в оренду через FERM!
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Якщо у вас є спецтехніка, яка простоює — ви можете здавати її в оренду через платформу FERM і заробляти. Ми знайдемо замовників.
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="shrink-0 rounded-xl bg-[#F9D223] px-8 py-4 text-base font-bold text-[#141413] shadow-md transition-transform hover:scale-105"
            >
              Стати партнером
            </button>
          </div>
        </div>
      </div>
      <PartnerModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
