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
    <section className="relative bg-[#222220] py-20 overflow-hidden">
      {/* Decorative ellipse */}
      <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#393735] opacity-30" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[40px] font-bold leading-tight text-white">Чому обирають FERM</h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {/* 3D-style placeholder icon — замінити на PNG-ілюстрації з Figma */}
              <div className="flex h-[140px] w-[140px] items-center justify-center">
                <Icon
                  className="h-24 w-24 text-[#F9D223] drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                  strokeWidth={1.25}
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-base text-[#B2ADA8]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
