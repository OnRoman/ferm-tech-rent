import { Mountain, PackageOpen, Construction, Hammer, Zap, Trees, Truck, ClipboardList } from "lucide-react";

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
    <section id="services" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Виконуємо повний перелік будівельних послуг
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Комплексні рішення під ключ — від земляних робіт до благоустрою
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <a
                href="https://ferm.in.ua/orenda-spectehniki/c-388"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Підібрати техніку →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
