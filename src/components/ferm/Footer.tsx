import { Linkedin, Send, Facebook } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

const company = [
  { label: "Про нас", href: "https://ferm.in.ua/pro-nas" },
  { label: "Вакансії", href: "https://ferm.in.ua/vakansii" },
  { label: "Стати партнером", href: "https://ferm.in.ua/franchajzing" },
  { label: "Політика конфіденційності", href: "https://ferm.in.ua/privacy" },
  { label: "Політика cookies", href: "https://ferm.in.ua/cookies" },
  { label: "Оферта", href: "https://ferm.in.ua/oferta" },
];

const buyer = [
  { label: "Переваги роботи з FERM", href: "https://ferm.in.ua/perevagi" },
  { label: "Поширені питання", href: "https://ferm.in.ua/faq" },
  { label: "Обмін та повернення", href: "https://ferm.in.ua/obmin" },
  { label: "Оплата та доставка", href: "https://ferm.in.ua/oplata-dostavka" },
  { label: "Умови кредитування", href: "https://ferm.in.ua/kredit" },
  { label: "Форма зворотнього зв'язку", href: "https://ferm.in.ua/contacts" },
];

export function Footer() {
  return (
    <footer className="bg-[#222220] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logoUrl} alt="FERM" className="h-9 w-auto brightness-0 invert" />
            <p className="mt-3 text-sm text-white/60">Все для сучасного фермерства</p>
            <div className="mt-6">
              <p className="text-sm font-semibold">Слідкуйте за нами</p>
              <div className="mt-3 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#F9D223] hover:text-[#141413]"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="Telegram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#F9D223] hover:text-[#141413]"><Send className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#F9D223] hover:text-[#141413]"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-bold text-white">Про компанію</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {company.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#F9D223]">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer */}
          <div>
            <h4 className="text-base font-bold text-white">Покупцеві</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {buyer.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#F9D223]">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe + contacts */}
          <div>
            <h4 className="text-base font-bold text-white">Підписуйтесь на знижки!</h4>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex overflow-hidden rounded-lg bg-white">
              <input type="email" placeholder="Ваш email" className="flex-1 bg-transparent px-3 py-2 text-sm text-[#141413] outline-none" />
              <button type="submit" className="bg-[#F9D223] px-4 py-2 text-sm font-bold text-[#141413] hover:brightness-95">
                Відправити
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li><a href="tel:0800750707" className="hover:text-[#F9D223]">0 800 75 07 07</a></li>
              <li><a href="mailto:sales@ferm.in.ua" className="hover:text-[#F9D223]">sales@ferm.in.ua</a></li>
              <li>Графік: з 9:00 до 20:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#5C9803] py-4 text-center text-sm text-white">
        © ТОВ ФЕРМ Є. 2022–2025
      </div>
    </footer>
  );
}
