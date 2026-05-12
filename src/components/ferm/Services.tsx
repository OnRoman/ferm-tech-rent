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
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-4xl">
            Виконуємо повний перелік будівельних послуг
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group flex flex-col rounded-2xl bg-[#F5F3F1] p-6 transition-all hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#141413]">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#141413]">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-[#908C88]">{desc}</p>
              <a href="https://ferm.in.ua/orenda-spectehniki/c-388" target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0099F7] hover:text-[#007acc]">
                Підібрати техніку <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
