import heroImg from "@/assets/hero-excavator.jpg";
import { Phone, Check } from "lucide-react";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("zayavka")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-[640px] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Будівельна спецтехніка на об'єкті"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="container relative mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            FERM — Оренда спецтехніки
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Оренда спецтехніки <span className="text-accent">по всій Україні</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Понад 5 000 одиниць техніки для будівництва, дорожніх робіт та благоустрою.
            Швидка подача. Оператори. Гарантія результату.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToForm}
              className="rounded-lg bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Залишити заявку
            </button>
            <a
              href="tel:0800750707"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
            >
              <Phone className="h-5 w-5" />
              0 800 75 07 07
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm md:gap-6">
            {["500+ одиниць у парку", "Подача від 2 годин", "Працюємо з ПДВ і без"].map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Check className="h-4 w-4 text-accent" strokeWidth={3} />
                <span className="font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
