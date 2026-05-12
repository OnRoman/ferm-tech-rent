import { Clock, Wallet, Wrench, Truck, FileText, MapPin, HardHat, Gift } from "lucide-react";

const items = [
  { icon: Clock, title: "Швидка подача", desc: "Техніка на об'єкті від 2 годин" },
  { icon: Wallet, title: "Конкурентна ціна", desc: "Привабливі тарифи по всіх категоріях" },
  { icon: Wrench, title: "Комплексний підхід", desc: "Підбираємо техніку під будь-яке завдання" },
  { icon: Truck, title: "5 000+ одиниць", desc: "Великий автопарк техніки по всій Україні" },
  { icon: FileText, title: "Гнучка оплата", desc: "Працюємо з ПДВ та без ПДВ" },
  { icon: MapPin, title: "Вся Україна", desc: "Покриття у всіх великих містах" },
  { icon: HardHat, title: "Оператори", desc: "Надаємо техніку з експертними операторами" },
  { icon: Gift, title: "Бонусна програма", desc: "Знижки для постійних клієнтів" },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Чому обирають FERM</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/15">
                <Icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
