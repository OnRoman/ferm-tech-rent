import { ArrowRight } from "lucide-react";

const items = [
  {
    img: "https://www.truck1-fr.ch/img/xxl/19992/JCB-4X4-Backhoe-Loader-4CX-3CX-Chine_19992_5009701529.jpg",
    title: "Екскаватори",
    alt: "Екскаватор JCB на будмайданчику",
    desc: "Екскаватори-навантажувачі, гусеничні, колісні та міні-екскаватори вагою від 1 до 30 тонн",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/ekskavatori/c-398",
  },
  {
    img: "https://img.waimaoniu.net/3642/3642-202510131636567759.jpg?x-oss-process=image/resize,m_lfit,w_800/format,webp",
    title: "Автокрани",
    alt: "Автокран із висуненою стрілою на об'єкті",
    desc: "Вантажопідйомність від 10 до 300 тонн, стріла від 14 до 70 метрів",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/krani/c-412",
  },
  {
    img: "https://www.westfalltande.com/fbm-data/images/service-pages/dump-truck-rental.webp",
    title: "Самоскиди",
    alt: "Самоскид з піднятим кузовом",
    desc: "Вантажопідйомність від 3 до 40 тонн, об'єм кузова від 5 до 35 м³",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/samoskidi/c-422",
  },
  {
    img: "https://dewhurstagri.com/wp-content/uploads/2025/09/IMG_1718-2048x1536.jpeg",
    title: "Будівельні навантажувачі",
    alt: "Телескопічний навантажувач у роботі",
    desc: "Телескопічні, фронтальні, міні та гусеничні, підйом від 7 до 23 м",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/budivel-ni-navantazuvaci/c-389",
  },
  {
    img: "https://storage.googleapis.com/production-gator-v1-0-0/840/387840/D4LIUHUy/3270b2a5e19f45a482391e402b87caac",
    title: "Техніка для земляних робіт",
    alt: "Бульдозер CAT D6K на земляних роботах",
    desc: "Бульдозери та грейдери вагою від 7 до 40 тонн, потужність до 350 к.с.",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/tehnika-dla-zemlanih-robit/c-430",
  },
  {
    img: "https://haulotte.ephoto.fr/link/3c9igq/izw19x981afp97k.jpeg",
    title: "Підйомники",
    alt: "Автовишка Haulotte на майданчику",
    desc: "Автовишки та ножичні підйомники висотою від 7 до 66 метрів",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/pidiomniki/c-417",
  },
  {
    img: "https://www.truck1.eu/img/xxl/44092/BOMAG-DE-BM-2000-65-STAGEV-Germany_44092_4864260031181.jpg",
    title: "Дорожня техніка",
    alt: "Асфальтоукладач BOMAG на дорозі",
    desc: "Асфальтоукладачі та дорожні фрези вагою від 5 до 30 тонн",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/dorozna-tehnika/c-394",
  },
  {
    img: "https://www.my-equipment.com/blog/wp-content/uploads/2019/11/C10572333.jpg",
    title: "Котки",
    alt: "Дорожній коток на ущільненні поверхні",
    desc: "Дорожні та ґрунтові котки вагою від 1 до 25 тонн, вальці від 600 до 2500 мм",
    price: "від 1200 грн/год",
    catalogHref: "https://ferm.in.ua/kotki/c-407",
  },
];

export function Catalog() {
  const handleOrder = (title: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", { content_name: title });
    }
    document.getElementById("zayavka")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catalog" className="bg-[#F5F3F1] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-5xl">
            Надаємо в оренду такі види техніки
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.title}
              className="group flex flex-col overflow-hidden bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl rounded-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <img src={it.img} alt={it.alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-md bg-[#222220] px-2.5 py-1 text-xs font-bold text-white">
                  {it.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold leading-tight text-[#141413]">{it.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[#908C88]">{it.desc}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <button onClick={() => handleOrder(it.title)}
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F5F3F1] py-3 text-sm font-bold text-[#141413] transition-colors hover:bg-[#ECE9E5]">
                    Замовити <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <a href={it.catalogHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-semibold text-[#0099F7] hover:opacity-80">
                    Парк техніки
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="https://ferm.in.ua/orenda-spectehniki/c-388" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F9D223] px-10 py-4 text-base font-bold text-[#141413] shadow-sm transition-transform hover:scale-105">
            Весь каталог спецтехніки
          </a>
        </div>
      </div>
    </section>
  );
}
