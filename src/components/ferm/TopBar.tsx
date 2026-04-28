import { Phone } from "lucide-react";

export function TopBar() {
  const scrollToForm = () => {
    document.getElementById("zayavka")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sticky top-0 z-50 bg-primary-dark text-white">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2 text-sm">
        <a href="tel:0800750707" className="flex items-center gap-2 font-semibold whitespace-nowrap">
          <Phone className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">0 800 75 07 07</span>
          <span className="sm:hidden">Дзвінок</span>
        </a>
        <span className="hidden md:block text-white/90">
          Безкоштовна консультація — залиште заявку або зателефонуйте
        </span>
        <button
          onClick={scrollToForm}
          className="rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-transform hover:scale-105 sm:px-4 sm:text-sm"
        >
          Залишити заявку
        </button>
      </div>
    </div>
  );
}
