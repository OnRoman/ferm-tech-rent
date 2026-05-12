import { Mountain, PackageOpen, Construction, Hammer, Zap, Trees, Truck, ClipboardList, ArrowRight } from "lucide-react";

const services = [
  { icon: Mountain, title: "Земляні роботи", desc: "Розчищення, планування території, риття траншей, переміщення ґрунту" },
  { icon: PackageOpen, title: "Вантажно-розвантажувальні", desc: "Встановлення обладнання, переміщення будматеріалів" },
  { icon: Construction, title: "Дорожні роботи", desc: "Будівництво доріг, укладання асфальту, бордюрів, тротуарів" },
  { icon: Hammer, title: "Монтажно-демонтажні", desc: "Встановлення конструкцій, знесення споруд" },
  { icon: Zap, title: "Комунікаційні роботи", desc: "Прокладка трубопроводів, електричних комунікацій" },
  { icon: Trees, title: "Ландшафтні роботи", desc: "Благоустрій, очищення водойм, прибирання снігу" },
  { icon: Truck, title: "Вивіз матеріалів", desc: "Будівельне сміття, ґрунт, металобрухт" },
  { icon: ClipboardList, title: "Комплексні проєкти", desc: "Повний цикл робіт під ключ з супроводом" },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-5xl">
            Виконуємо повний перелік будівельних послуг
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group flex flex-col rounded-3xl bg-[#F5F3F1] p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#141413] shadow-sm">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#141413]">{title}</h3>
              <p className="mt-3 flex-1 text-sm text-[#908C88]">{desc}</p>
              <a href="https://ferm.in.ua/orenda-spectehniki/c-388" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0099F7] hover:text-[#007acc]">
                Підібрати техніку <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
