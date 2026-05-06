import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

export function TopBar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Техніка", id: "catalog" },
    { label: "Послуги", id: "services" },
    { label: "Географія", id: "coverage" },
    { label: "Контакти", id: "zayavka" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-[#F8F8F8] text-xs text-muted-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5">
          <span>Все для сучасного фермерства</span>
          <a href="tel:0800750707" className="font-semibold text-primary hover:text-primary-dark">
            0 800 75 07 07
          </a>
          <a
            href="https://ferm.in.ua/pro-nas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Про нас
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <a href="/" className="flex items-center gap-2 leading-none">
            <img src={logoUrl} alt="FERM" className="h-8 w-auto md:h-9" />
            <span className="hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block">Агроплатформа</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0800750707"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary lg:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollTo("zayavka")}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-dark sm:inline-block"
            >
              Залишити заявку
            </button>
            <button
              aria-label="Меню"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="container mx-auto flex flex-col px-4 py-3">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="border-b border-border py-3 text-left text-sm font-medium hover:text-primary"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="https://ferm.in.ua/pro-nas"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border py-3 text-sm font-medium hover:text-primary"
              >
                Про нас
              </a>
              <button
                onClick={() => scrollTo("zayavka")}
                className="mt-3 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
              >
                Залишити заявку
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
