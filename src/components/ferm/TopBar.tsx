import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, ChevronRight } from "lucide-react";
import logoUrl from "@/assets/ferm-logo.svg";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const SearchBar = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (query.trim()) {
          window.open(
            `https://ferm.in.ua/search?q=${encodeURIComponent(query)}`,
            "_blank",
            "noopener,noreferrer",
          );
        }
      }}
      className="relative flex w-full items-center"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Я шукаю..."
        className="w-full rounded-full border border-border bg-background py-2.5 pl-5 pr-14 text-sm focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Пошук"
        className="absolute right-1 top-1/2 -translate-y-1/2 flex h-9 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground hover:opacity-90"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-background shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto flex items-center gap-4 px-4 py-3">
          <a href="https://ferm.in.ua" className="flex shrink-0 items-center gap-2 leading-none">
            <img src={logoUrl} alt="FERM" className="h-8 w-auto md:h-9" />
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://ferm.in.ua"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Товари
            </a>
            <a
              href="https://ferm.in.ua/poslugy"
              className="rounded-full px-5 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Послуги
            </a>
          </div>

          <div className="hidden flex-1 lg:block">
            <SearchBar />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://ferm.in.ua/login"
              className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 lg:inline-flex"
            >
              <User className="h-4 w-4" />
              Увійти
            </a>
            <a
              href="https://ferm.in.ua/cart"
              aria-label="Кошик"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
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

        <div className="hidden border-t border-border bg-background lg:block">
          <div className="container mx-auto flex items-center gap-2 px-4 py-2 text-xs text-muted-foreground">
            <a href="https://ferm.in.ua" className="hover:text-foreground">Головна</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Оренда спецтехніки</span>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
              <SearchBar />
              <a
                href="https://ferm.in.ua"
                className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground"
              >
                Товари
              </a>
              <a
                href="https://ferm.in.ua/poslugy"
                className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-semibold"
              >
                Послуги
              </a>
              <a
                href="https://ferm.in.ua/pro-nas"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-semibold"
              >
                Про нас
              </a>
              <a
                href="https://ferm.in.ua/login"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
              >
                <User className="h-4 w-4" /> Увійти
              </a>
              <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                <a href="https://ferm.in.ua" className="hover:text-foreground">Головна</a>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground">Оренда спецтехніки</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
