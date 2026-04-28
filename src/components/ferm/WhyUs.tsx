import { useEffect, useRef, useState } from "react";
import { Clock, Wallet, Wrench, Truck, FileText, MapPin, HardHat, Gift } from "lucide-react";

const items = [
  { icon: Clock, title: "Швидка подача", desc: "Техніка на об'єкті від 2 годин" },
  { icon: Wallet, title: "Конкурентна ціна", desc: "Привабливі тарифи по всіх категоріях" },
  { icon: Wrench, title: "Комплексний підхід", desc: "Підбираємо техніку під будь-яке завдання" },
  { icon: Truck, title: "5 000+ одиниць", desc: "Великий автопарк техніки по всій Україні" },
  { icon: FileText, title: "Гнучка оплата", desc: "Працюємо з ПДВ та без ПДВ" },
  { icon: MapPin, title: "Вся Україна", desc: "Покриття у всіх великих містах" },
  { icon: HardHat, title: "Оператори", desc: "Надаємо техніку з кваліфікованими операторами" },
  { icon: Gift, title: "Бонусна програма", desc: "Знижки для постійних клієнтів" },
];

function useCountUp(target: number, duration = 1500) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const p = Math.min(1, (Date.now() - start) / duration);
          setV(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        tick();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { v, ref };
}

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { v, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold text-accent md:text-5xl">
        {v.toLocaleString("uk-UA")}{suffix}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="relative bg-surface-dark text-surface-dark-foreground py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Чому обирають FERM</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10">
          <Counter target={5000} suffix="+" label="одиниць техніки" />
          <Counter target={24} suffix="" label="міст України" />
          <Counter target={500} suffix="+" label="клієнтів" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
