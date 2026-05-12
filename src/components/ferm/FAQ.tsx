import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Чи можете зробити послугу під ключ?", a: "Так, наша компанія надає техніку для виконання будь-якого запиту клієнта під ключ. Зверніться за номером 0 800 75 07 07 або залиште заявку — менеджер зв'яжеться найближчим часом." },
  { q: "Які доступні форми оплати?", a: "Ми працюємо з різними формами фінансового розрахунку: передоплата, післяплата, проміжні оплати. Працюємо з ПДВ та без ПДВ." },
  { q: "По яких регіонах України ви працюєте?", a: "Ми надаємо послуги по всій території України, окрім тимчасово окупованих територій та зон активних бойових дій." },
  { q: "Як зв'язатись з менеджером?", a: "Зателефонуйте за номером 0 800 75 07 07 або залиште заявку на цій сторінці." },
  { q: "Як формується ціна на оренду?", a: "Ціна формується на основі: обсяг робіт, технічні вимоги до техніки, форма розрахунку, термін оренди, умови проживання та харчування операторів." },
  { q: "Чи надаєте оператора разом з технікою?", a: "Так, ми можемо надати техніку разом з кваліфікованим оператором." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Найчастіші питання</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition-colors hover:bg-muted/50"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 py-4 text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
