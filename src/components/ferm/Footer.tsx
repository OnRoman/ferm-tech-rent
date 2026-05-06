import { Phone, Mail, Facebook, Instagram, Send } from "lucide-react";

const services = [
  { label: "Оренда спецтехніки", href: "https://ferm.in.ua/orenda-spectehniki/c-388" },
  { label: "Оренда агротехніки", href: "https://ferm.in.ua/orenda-agrotehniki" },
  { label: "Ремонт та ТО", href: "https://ferm.in.ua/remont-ta-to" },
  { label: "Вантажні перевезення", href: "https://ferm.in.ua/vantazni-perevezennya" },
];

const company = [
  { label: "Про нас", href: "https://ferm.in.ua/pro-nas" },
  { label: "Стати партнером", href: "https://ferm.in.ua/franchajzing" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-3xl font-extrabold text-primary">FERM</div>
            <p className="mt-3 text-sm text-white/70">
              Агроплатформа FERM — оренда спецтехніки по всій Україні
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a href="tel:0800750707" className="flex items-center gap-2 text-white hover:text-primary">
                  <Phone className="h-4 w-4" /> 0 800 75 07 07
                </a>
              </li>
              <li>
                <a href="mailto:sales@ferm.in.ua" className="flex items-center gap-2 text-white hover:text-primary">
                  <Mail className="h-4 w-4" /> sales@ferm.in.ua
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent">Послуги</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent">Компанія</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {company.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {c.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#zayavka" className="hover:text-white">Контакти</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Telegram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-primary"><Send className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2026 FERM. Агроплатформа. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
