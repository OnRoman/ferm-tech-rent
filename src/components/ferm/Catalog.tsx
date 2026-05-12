import { ArrowRight } from "lucide-react";

const items = [
  {
    img: "https://www.truck1-fr.ch/img/xxl/19992/JCB-4X4-Backhoe-Loader-4CX-3CX-Chine_19992_5009701529.jpg",
    title: "Екскаватори",
    alt: "Екскаватор JCB на будмайданчику",
    desc: "Екскаватори-навантажувачі, гусеничні, колісні та міні-екскаватори вагою від 1 до 30 тонн",
    href: "https://ferm.in.ua/ekskavatori/c-398",
    price: "від 1200 грн/год",
  },
  {
    img: "https://img.waimaoniu.net/3642/3642-202510131636567759.jpg?x-oss-process=image/resize,m_lfit,w_800/format,webp",
    title: "Автокрани",
    alt: "Автокран із висуненою стрілою на об'єкті",
    desc: "Вантажопідйомність від 10 до 300 тонн, стріла від 14 до 70 метрів",
    href: "https://ferm.in.ua/krani/c-412",
    price: "від 1500 грн/год",
  },
  {
    img: "https://www.westfalltande.com/fbm-data/images/service-pages/dump-truck-rental.webp",
    title: "Самоскиди",
    alt: "Самоскид з піднятим кузовом",
    desc: "Вантажопідйомність від 3 до 40 тонн, об'єм кузова від 5 до 35 м³",
    href: "https://ferm.in.ua/samoskidi/c-422",
    price: "від 900 грн/год",
  },
  {
    img: "https://dewhurstagri.com/wp-content/uploads/2025/09/IMG_1718-2048x1536.jpeg",
    title: "Будівельні навантажувачі",
    alt: "Телескопічний навантажувач у роботі",
    desc: "Телескопічні, фронтальні, міні та гусеничні, підйом від 7 до 23 м",
    href: "https://ferm.in.ua/budivel-ni-navantazuvaci/c-389",
    price: "від 1100 грн/год",
  },
  {
    img: "https://storage.googleapis.com/production-gator-v1-0-0/840/387840/D4LIUHUy/3270b2a5e19f45a482391e402b87caac",
    title: "Техніка для земляних робіт",
    alt: "Бульдозер CAT D6K на земляних роботах",
    desc: "Бульдозери та грейдери вагою від 7 до 40 тонн, потужність до 350 к.с.",
    href: "https://ferm.in.ua/tehnika-dla-zemlanih-robit/c-430",
    price: "від 1400 грн/год",
  },
  {
    img: "https://haulotte.ephoto.fr/link/3c9igq/izw19x981afp97k.jpeg",
    title: "Підйомники",
    alt: "Автовишка Haulotte на майданчику",
    desc: "Автовишки та ножичні підйомники висотою від 7 до 66 метрів",
    href: "https://ferm.in.ua/pidiomniki/c-417",
    price: "від 800 грн/год",
  },
  {
    img: "https://www.truck1.eu/img/xxl/44092/BOMAG-DE-BM-2000-65-STAGEV-Germany_44092_4864260031181.jpg",
    title: "Дорожня техніка",
    alt: "Асфальтоукладач BOMAG на дорозі",
    desc: "Асфальтоукладачі та дорожні фрези вагою від 5 до 30 тонн",
    href: "https://ferm.in.ua/dorozna-tehnika/c-394",
    price: "від 1300 грн/год",
  },
  {
    img: "https://www.my-equipment.com/blog/wp-content/uploads/2019/11/C10572333.jpg",
    title: "Котки",
    alt: "Дорожній коток на ущільненні поверхні",
    desc: "Дорожні та ґрунтові котки вагою від 1 до 25 тонн, вальці від 600 до 2500 мм",
    href: "https://ferm.in.ua/kotki/c-407",
    price: "від 700 грн/год",
  },
];

export function Catalog() {
  const trackView = (title: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", { content_name: title });
    }
  };
  const orderClick = (title: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { source: "CatalogCard", content_name: title });
    }
    document.getElementById("zayavka")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="catalog" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Надаємо в оренду такі види техніки
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-[#F9D223]" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-muted">
                <img
                  src={it.img}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-[#F9D223] px-2.5 py-1 text-sm font-bold text-[#141413] shadow">
                  {it.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold">{it.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{it.desc}</p>
                <button
                  onClick={() => orderClick(it.title)}
                  className="mt-4 w-full rounded-lg bg-[#F9D223] py-2.5 text-sm font-bold text-[#141413] transition-transform hover:scale-[1.01]"
                >
                  Замовити
                </button>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackView(it.title)}
                  className="mt-3 inline-flex items-center justify-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Парк техніки
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://ferm.in.ua/orenda-spectehniki/c-388"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Весь каталог спецтехніки <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
