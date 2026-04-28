import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile call button */}
      <a
        href="tel:0800750707"
        aria-label="Зателефонувати"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl ring-4 ring-primary/20 transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6 animate-pulse" />
      </a>
      {/* Scroll to top */}
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Нагору"
          className="fixed bottom-5 right-5 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-surface-dark text-white shadow-xl transition-all hover:bg-primary md:flex"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
