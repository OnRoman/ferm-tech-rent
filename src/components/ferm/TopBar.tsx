import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronRight } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

const subLinks = [
  { label: "Агрокалендар", href: "https://ferm.in.ua/agrokalendar" },
  { label: "Аналітика", href: "https://ferm.in.ua/analitika" },
  { label: "Ціни на продукцію", href: "https://ferm.in.ua/cini" },
  { label: "Калькулятори", href: "https://ferm.in.ua/kalkulyatori" },
];

export function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top dark sub-header */}
      <div className="hidden bg-[#222220] py-2 text-white lg:block">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4">
          <nav className="flex items-center gap-5">
            {subLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white transition-colors hover:text-[#F9D223]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://ferm.in.ua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#F9D223] hover:underline"
            >
              Агро-помічниця
            </a>
          </nav>
          <div className="flex items-center gap-5">
            <a href="tel:+380800750707" className="text-sm font-bold text-white hover:text-[#F9D223]">
              +380 800 75 07 07
            </a>
            <span className="text-sm text-white/70">Ціни в ГРН</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-3 shadow">
        <div className="container mx-auto flex items-center gap-4 px-4">
          <a href="https://ferm.in.ua" className="flex shrink-0 items-center gap-2 leading-none">
            <img src={logoUrl} alt="FERM" className="h-8 w-auto md:h-9" />
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            <a
              href="https://ferm.in.ua/orenda-spectehniki/c-388"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F9D223] px-4 py-2 text-base font-bold text-[#141413]"
            >
              Товари
            </a>
            <a
              href="https://ferm.in.ua/poslugi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base font-bold text-[#141413] hover:text-[#5C9803]"
            >
              Послуги
            </a>
            <a
              href="https://ferm.in.ua/ogoloshennya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-base font-bold text-[#141413] hover:text-[#5C9803]"
            >
              Оголошення
            </a>
          </nav>

          {/* Search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden flex-1 items-center overflow-hidden rounded-full border border-border bg-white md:flex"
          >
            <Search className="ml-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Я шукаю..."
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#F9D223] px-5 py-2 text-sm font-bold text-[#141413] hover:brightness-95"
            >
              Шукати
            </button>
          </form>

          <div className="flex items-center gap-3">
            <a
              href="https://ferm.in.ua/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[#F9D223] px-4 py-2 text-sm font-bold text-[#141413] hover:brightness-95 md:inline-flex"
            >
              <User className="h-4 w-4" />
              Увійти
            </a>
            <a
              href="https://ferm.in.ua/cart"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Кошик"
              className="relative rounded-full p-2 hover:bg-muted"
            >
              <ShoppingCart className="h-5 w-5 text-[#141413]" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#5C9803] text-[10px] font-bold text-white">
                2
              </span>
            </a>
            <button
              aria-label="Меню"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="hidden border-t border-border lg:block">
          <div className="container mx-auto flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground">
            <a href="https://ferm.in.ua" className="hover:text-[#5C9803]">Головна</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#141413]">Оренда спецтехніки</span>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-white lg:hidden">
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center overflow-hidden rounded-full border border-border">
                <Search className="ml-3 h-4 w-4 text-muted-foreground" />
                <input type="search" placeholder="Я шукаю..." className="flex-1 bg-transparent px-3 py-2 text-sm outline-none" />
                <button type="submit" className="bg-[#F9D223] px-4 py-2 text-sm font-bold text-[#141413]">Шукати</button>
              </form>
              <a href="https://ferm.in.ua/orenda-spectehniki/c-388" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#F9D223] px-4 py-2 text-center text-base font-bold text-[#141413]">Товари</a>
              <a href="https://ferm.in.ua/poslugi" target="_blank" rel="noopener noreferrer" className="border-b border-border py-2 text-base font-bold">Послуги</a>
              <a href="https://ferm.in.ua/ogoloshennya" target="_blank" rel="noopener noreferrer" className="border-b border-border py-2 text-base font-bold">Оголошення</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
