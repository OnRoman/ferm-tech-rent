import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Чи можете зробити послугу під ключ?", a: "Так, наша компанія надає техніку для виконання будь-якого запиту клієнта під ключ. Зверніться за номером 0 800 75 07 07 або залиште заявку — менеджер зв'яжеться найближчим часом." },
  { q: "Які доступні форми оплати?", a: "Ми надаємо різні формати фінансового розрахунку: передоплата, післяплата, проміжні оплати." },
  { q: "По яким регіонам України ви пропонуєте роботу?", a: "Ми надаємо послуги по всій території України, окрім тимчасово окупованих територій та зон активних бойових дій." },
  { q: "Як зв'язатись з відповідальним менеджером?", a: "Зателефонуйте за номером 0 800 75 07 07 або залиште заявку на цій сторінці." },
  { q: "Як формується ціна на оренду?", a: "Ціна формується на основі: обсяг робіт, технічні вимоги до техніки, форма розрахунку, термін оренди, умови проживання та харчування операторів." },
  { q: "Чи надаєте оператора разом з технікою?", a: "Так, ми можемо надати техніку разом з кваліфікованим оператором." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-4xl">Поширені питання</h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#141413] transition-colors hover:bg-[#F5F3F1]/50"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#908C88] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#908C88]">
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
