import { ArrowRight } from "lucide-react";
import excavator from "@/assets/cat-excavator.jpg";
import attachments from "@/assets/cat-attachments.jpg";
import crane from "@/assets/cat-crane.jpg";
import dumptruck from "@/assets/cat-dumptruck.jpg";
import loader from "@/assets/cat-loader.jpg";
import bulldozer from "@/assets/cat-bulldozer.jpg";
import lift from "@/assets/cat-lift.jpg";
import road from "@/assets/cat-road.jpg";
import roller from "@/assets/cat-roller.jpg";

const items = [
  { img: excavator, title: "Екскаватори", desc: "Екскаватори-навантажувачі, гусеничні, колісні та міні-екскаватори вагою від 1 до 30 тонн" },
  { img: attachments, title: "Навісне обладнання", desc: "Гідромолот, ямобур, дорожня фреза, вила, гідроножиці для складних інженерних задач" },
  { img: crane, title: "Автокрани", desc: "Вантажопідйомність від 10 до 300 тонн, стріла від 14 до 70 метрів" },
  { img: dumptruck, title: "Самоскиди", desc: "Вантажопідйомність від 3 до 40 тонн, об'єм кузова від 5 до 35 м³" },
  { img: loader, title: "Будівельні навантажувачі", desc: "Телескопічні, фронтальні, міні та гусеничні, підйом від 7 до 23 м" },
  { img: bulldozer, title: "Техніка для земляних робіт", desc: "Бульдозери та грейдери вагою від 7 до 40 тонн, потужність до 350 к.с." },
  { img: lift, title: "Підйомники", desc: "Автовишки та ножичні підйомники висотою від 7 до 66 метрів" },
  { img: road, title: "Дорожня техніка", desc: "Асфальтоукладачі та дорожні фрези вагою від 5 до 30 тонн" },
  { img: roller, title: "Котки", desc: "Дорожні та ґрунтові котки вагою від 1 до 25 тонн, вальці від 600 до 2500 мм" },
];

export function Catalog() {
  const handleClick = (title: string) => {
    // Facebook Pixel: ViewContent
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "ViewContent", { content_name: title });
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
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={it.img}
                  alt={it.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                <button
                  onClick={() => handleClick(it.title)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Детальніше <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
