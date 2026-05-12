import { Phone, Mail, Clock, Send } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

const company = [
  { label: "Про нас", href: "https://ferm.in.ua/pro-nas" },
  { label: "Вакансії", href: "https://ferm.in.ua/vacancies" },
  { label: "Стати партнером", href: "https://ferm.in.ua/franchajzing" },
  { label: "Політика конфіденційності", href: "https://ferm.in.ua/privacy" },
  { label: "Політика cookies", href: "https://ferm.in.ua/cookies" },
  { label: "Оферта", href: "https://ferm.in.ua/oferta" },
];

const buyer = [
  { label: "Переваги роботи з FERM", href: "https://ferm.in.ua/perevagi" },
  { label: "Поширені питання", href: "https://ferm.in.ua/faq" },
  { label: "Обмін та повернення", href: "https://ferm.in.ua/return" },
  { label: "Оплата та доставка", href: "https://ferm.in.ua/payment" },
  { label: "Умови кредитування", href: "https://ferm.in.ua/credit" },
  { label: "Форма зворотнього зв'язку", href: "#zayavka" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logoUrl} alt="FERM" className="h-9 w-auto brightness-0 invert" />
            <p className="mt-3 text-sm text-white/60">
              Все для сучасного фермерства
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Слідкуйте за нами</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18V10H5.67v8h2.67zm-1.33-9.13a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18v-4.4c0-2.4-1.28-3.52-3-3.52-1.38 0-2 .76-2.34 1.3V10h-2.67c.04.76 0 8 0 8h2.67v-4.47c0-.24.02-.48.09-.65.18-.48.62-.98 1.36-.98.96 0 1.34.73 1.34 1.8V18h2.55z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Telegram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.5-1.5H17V4.3c-.3-.04-1.3-.13-2.5-.13-2.5 0-4 1.5-4 4.3V10.5H8v3h2.5V21h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white">Про компанію</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer */}
          <div>
            <h4 className="font-bold text-white">Покупцеві</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {buyer.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target={c.href.startsWith("#") ? undefined : "_blank"} rel="noopener noreferrer" className="text-white/70 hover:text-white">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog + subscribe + contacts */}
          <div>
            <h4 className="font-bold text-white">Блог</h4>
            <p className="mt-4 text-sm text-white/70">Підписуйтесь на знижки!</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex gap-2"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:opacity-90"
              >
                Відправити
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a href="tel:0800750707" className="flex items-center gap-2 text-white/80 hover:text-white">
                  <Phone className="h-4 w-4" />
                  0 800 75 07 07
                </a>
              </li>
              <li>
                <a href="mailto:sales@ferm.in.ua" className="flex items-center gap-2 text-white/80 hover:text-white">
                  <Mail className="h-4 w-4" />
                  sales@ferm.in.ua
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                з 9:00 до 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © ТОВ ФЕРМ Є. 2022–2025
        </div>
      </div>
    </footer>
  );
}
