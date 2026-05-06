import { useState } from "react";
import mapUrl from "@/assets/ukraine-map.svg";
import { PartnerModal } from "./PartnerModal";

const cities: { name: string; x: number; y: number; capital?: boolean }[] = [
  { name: "Київ", x: 50, y: 30, capital: true },
  { name: "Харків", x: 72, y: 28 },
  { name: "Одеса", x: 48, y: 72 },
  { name: "Дніпро", x: 62, y: 48 },
  { name: "Запоріжжя", x: 65, y: 55 },
  { name: "Львів", x: 18, y: 30 },
  { name: "Кривий Ріг", x: 57, y: 55 },
  { name: "Миколаїв", x: 52, y: 68 },
  { name: "Вінниця", x: 38, y: 38 },
  { name: "Херсон", x: 55, y: 72 },
  { name: "Полтава", x: 62, y: 32 },
  { name: "Чернігів", x: 52, y: 18 },
  { name: "Черкаси", x: 52, y: 40 },
  { name: "Хмельницький", x: 30, y: 35 },
  { name: "Житомир", x: 38, y: 28 },
  { name: "Суми", x: 62, y: 20 },
  { name: "Рівне", x: 24, y: 25 },
  { name: "Івано-Франківськ", x: 20, y: 42 },
  { name: "Тернопіль", x: 24, y: 35 },
  { name: "Кропивницький", x: 52, y: 50 },
  { name: "Луцьк", x: 18, y: 22 },
  { name: "Ужгород", x: 10, y: 38 },
  { name: "Кам'янське", x: 60, y: 48 },
];

export function CoverageMap() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section id="coverage" className="bg-[#F5F5F5] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Географія нашої техніки</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Працюємо по всій Україні — техніка сконцентрована у найбільших містах
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-card p-4 md:p-8 shadow-sm border border-border">
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: 800, aspectRatio: "3 / 2" }}
            onMouseLeave={() => setActive(null)}
          >
            <img
              src={mapUrl}
              alt="Карта України"
              className="absolute inset-0 h-full w-full object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(72%) sepia(45%) saturate(458%) hue-rotate(73deg) brightness(94%) contrast(89%)",
                opacity: 0.25,
              }}
              loading="lazy"
            />
            {cities.map((c) => {
              const size = c.capital ? 18 : 12;
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
                    className="block rounded-full bg-primary ring-2 ring-accent shadow-md transition-transform hover:scale-125"
                    style={{ width: size, height: size }}
                  />
                  {c.capital && (
                    <span
                      className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40"
                    />
                  )}
                  {isActive && (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-semibold text-foreground shadow-lg ring-1 ring-border">
                      {c.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
            {cities.map((c) => (
              <span key={c.name} className="rounded-full bg-muted px-3 py-1">{c.name}</span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Не знайшли ваше місто? <a href="tel:0800750707" className="font-semibold text-primary hover:underline">Зв'яжіться з нами</a> — ми знайдемо рішення!
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border-2 border-accent bg-card p-8 shadow-sm">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold">Маєте спецтехніку? Здавайте в оренду через FERM!</h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Якщо у вас є спецтехніка, яка простоює — ви можете здавати її в оренду через платформу FERM і заробляти. Ми знайдемо замовників.
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="shrink-0 rounded-lg bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-md transition-transform hover:scale-105"
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
