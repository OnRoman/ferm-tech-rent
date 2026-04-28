import { useState } from "react";
import { PartnerModal } from "./PartnerModal";

// Approximate normalized x/y (0-100) on a Ukraine outline
const cities: { name: string; x: number; y: number }[] = [
  { name: "Київ", x: 52, y: 38 },
  { name: "Харків", x: 73, y: 42 },
  { name: "Одеса", x: 49, y: 78 },
  { name: "Дніпро", x: 67, y: 56 },
  { name: "Запоріжжя", x: 70, y: 62 },
  { name: "Львів", x: 16, y: 45 },
  { name: "Кривий Ріг", x: 60, y: 62 },
  { name: "Миколаїв", x: 53, y: 72 },
  { name: "Вінниця", x: 38, y: 53 },
  { name: "Херсон", x: 56, y: 75 },
  { name: "Полтава", x: 63, y: 45 },
  { name: "Чернігів", x: 55, y: 26 },
  { name: "Черкаси", x: 53, y: 50 },
  { name: "Хмельницький", x: 30, y: 50 },
  { name: "Житомир", x: 41, y: 38 },
  { name: "Суми", x: 67, y: 32 },
  { name: "Рівне", x: 28, y: 38 },
  { name: "Івано-Франківськ", x: 18, y: 56 },
  { name: "Тернопіль", x: 23, y: 49 },
  { name: "Кропивницький", x: 55, y: 57 },
  { name: "Луцьк", x: 23, y: 33 },
  { name: "Ужгород", x: 8, y: 60 },
  { name: "Кам'янське", x: 65, y: 56 },
];

export function CoverageMap() {
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Географія нашої техніки</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Працюємо по всій Україні — техніка сконцентрована у найбільших містах
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-card p-6 shadow-sm border border-border">
          <div className="relative aspect-[4/3]">
            <svg viewBox="0 0 100 75" className="h-full w-full" aria-label="Карта України">
              {/* Simplified Ukraine silhouette */}
              <path
                d="M 5,55 Q 8,48 12,42 Q 14,32 22,30 Q 28,26 33,30 Q 38,28 42,32 Q 48,28 54,24 Q 60,22 66,28 Q 72,30 78,34 Q 85,38 88,44 Q 92,50 88,56 Q 82,60 76,62 Q 70,66 64,70 Q 56,74 48,76 Q 40,75 34,72 Q 28,70 22,68 Q 16,66 10,62 Q 6,58 5,55 Z"
                fill="oklch(0.95 0.02 145)"
                stroke="oklch(0.68 0.17 145)"
                strokeWidth="0.4"
              />
              {cities.map((c) => (
                <g key={c.name}
                   onMouseEnter={() => setHover(c.name)}
                   onMouseLeave={() => setHover(null)}
                   className="cursor-pointer">
                  <circle cx={c.x} cy={c.y} r="1.6" fill="oklch(0.84 0.17 85)" stroke="oklch(0.56 0.16 145)" strokeWidth="0.3" />
                  <circle cx={c.x} cy={c.y} r="3" fill="oklch(0.84 0.17 85 / 0.3)" className="animate-pulse" />
                </g>
              ))}
              {hover && (() => {
                const c = cities.find((x) => x.name === hover)!;
                return (
                  <g>
                    <rect x={c.x - 8} y={c.y - 7} width={hover.length * 1.4 + 4} height="4" rx="1" fill="oklch(0.2 0.03 270)" />
                    <text x={c.x - 6} y={c.y - 4} fontSize="2.5" fill="white" fontWeight="bold">{hover}</text>
                  </g>
                );
              })()}
            </svg>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
            {cities.map((c) => (
              <span key={c.name} className="rounded-full bg-muted px-3 py-1">{c.name}</span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Не знайшли ваше місто? <a href="tel:0800750707" className="font-semibold text-primary hover:underline">Зв'яжіться з нами</a> — ми знайдемо рішення!
          </p>
        </div>

        {/* Partner block */}
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
