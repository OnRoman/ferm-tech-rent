import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronRight, Phone } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

const subLinks = [
  { label: "Агрокалендар", href: "https://ferm.in.ua/agrokalendar" },
  { label: "Аналітика", href: "https://ferm.in.ua/analityka" },
  { label: "Ціни на продукцію", href: "https://ferm.in.ua/tsiny" },
  { label: "Калькулятори", href: "https://ferm.in.ua/kalkulyatory" },
];

export function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main header */}
      <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto flex items-center gap-4 px-4 py-3">
          <a href="https://ferm.in.ua" className="flex shrink-0 items-center">
            <img src={logoUrl} alt="FERM" className="h-8 w-auto md:h-9" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            <a href="https://ferm.in.ua"
              className="rounded-full bg-[#F9D223] px-4 py-2 text-base font-bold text-[#141413]">
              Товари
            </a>
            <a href="https://ferm.in.ua/poslugy"
              className="rounded-full px-4 py-2 text-base font-bold text-[#141413] transition-colors hover:bg-gray-100">
              Послуги
            </a>
          </nav>

          <div className="hidden flex-1 lg:block">
            <div className="relative mx-auto max-w-xl">
              <input type="text" placeholder="Я шукаю..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-24 text-base text-[#141413] placeholder:text-[#908C88] focus:border-[#5C9803] focus:outline-none" />
              <button className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#F9D223] px-4 py-2 text-sm font-bold text-[#141413] transition-transform hover:scale-[1.02]">
                <Search className="h-4 w-4" />
                Шукати
              </button>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a href="https://ferm.in.ua/login"
              className="hidden items-center gap-1.5 rounded-full bg-[#F9D223] px-5 py-2.5 text-base font-bold text-[#141413] transition-transform hover:scale-[1.02] lg:flex">
              Увійти
            </a>
            <a href="https://ferm.in.ua/login" aria-label="Увійти"
              className="flex items-center justify-center rounded-full p-2 text-[#141413] hover:bg-gray-100 lg:hidden">
              <User className="h-5 w-5" />
            </a>
            <a href="https://ferm.in.ua/cart" aria-label="Кошик"
              className="relative flex items-center justify-center rounded-full p-2 text-[#141413] hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#5C9803] text-[10px] font-bold text-white">2</span>
            </a>
            <button aria-label="Меню" onClick={() => setMobileOpen((v) => !v)} className="rounded-md p-2 lg:hidden">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="hidden border-t border-gray-100 lg:block">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex items-center gap-1 text-sm text-[#908C88]">
              <a href="https://ferm.in.ua" className="hover:text-[#5C9803]">Головна</a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-[#141413]">Оренда спецтехніки</span>
            </nav>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">
            <div className="container mx-auto px-4 py-3">
              <div className="relative mb-3">
                <input type="text" placeholder="Я шукаю..."
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-12 text-sm focus:border-[#5C9803] focus:outline-none" />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#F9D223] p-2 text-[#141413]">
                  <Search className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col">
                <a href="https://ferm.in.ua" className="border-b border-gray-100 py-3 text-sm font-bold hover:text-[#5C9803]">Товари</a>
                <a href="https://ferm.in.ua/poslugy" className="border-b border-gray-100 py-3 text-sm font-bold hover:text-[#5C9803]">Послуги</a>
                <a href="tel:+380800750707" className="flex items-center gap-2 border-b border-gray-100 py-3 text-sm font-bold text-[#5C9803]">
                  <Phone className="h-4 w-4" /> +380 800 75 07 07
                </a>
              </nav>
              <nav className="mt-3 flex items-center gap-1 text-xs text-[#908C88]">
                <a href="https://ferm.in.ua" className="hover:text-[#5C9803]">Головна</a>
                <ChevronRight className="h-3 w-3" />
                <span className="font-medium text-[#141413]">Оренда спецтехніки</span>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
