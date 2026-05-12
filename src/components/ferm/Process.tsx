import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import step1 from "@/assets/steps/step1.png";
import step2 from "@/assets/steps/step2.png";
import step3 from "@/assets/steps/step3.png";
import step4 from "@/assets/steps/step4.png";
import step5 from "@/assets/steps/step5.png";

const steps = [
  { n: 1, t: "Залишаєте заявку на сайті або телефонуєте", img: step1 },
  { n: 2, t: "Менеджер уточнює задачу та обсяг робіт", img: step2 },
  { n: 3, t: "Підбираємо оптимальну техніку", img: step3 },
  { n: 4, t: "Отримуєте комерційну пропозицію", img: step4 },
  { n: 5, t: "Техніка виходить на ваш об'єкт", img: step5 },
];

export function Process() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-step-card]");
    const delta = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-5xl">
            Як замовити техніку
          </h2>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-12 flex gap-6 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] md:px-[max(1rem,calc((100vw-1280px)/2+1rem))] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((s) => (
          <article
            key={s.n}
            data-step-card
            className="relative flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl bg-[#F5F3F1] p-7 sm:w-[340px]"
          >
            <p className="text-2xl font-bold text-[#B2ADA8]">Крок {s.n}.</p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#141413] sm:text-[28px]">
              {s.t}
            </h3>
            <img
              src={s.img}
              alt={s.t}
              loading="lazy"
              width={768}
              height={768}
              className="pointer-events-none absolute -bottom-2 left-1/2 h-[230px] w-auto -translate-x-1/2 object-contain"
            />
          </article>
        ))}
      </div>

      <div className="container mx-auto mt-8 flex justify-center gap-3 px-4">
        <button
          onClick={() => scroll("left")}
          aria-label="Попередній крок"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F3F1] text-[#141413] transition hover:bg-[#e9e6e2]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Наступний крок"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F3F1] text-[#141413] transition hover:bg-[#e9e6e2]"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
