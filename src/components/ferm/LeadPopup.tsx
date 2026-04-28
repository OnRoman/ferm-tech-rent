import { useEffect, useState } from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ferm_popup_shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("ferm_popup_shown", "1");
    }, 20000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Підключити бекенд для отримання ліда
    trackLead("Popup");
    setSent(true);
    setTimeout(() => setOpen(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in-up" onClick={() => setOpen(false)}>
      <div className="relative w-full max-w-md rounded-2xl bg-card p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setOpen(false)} aria-label="Закрити" className="absolute right-3 top-3 rounded-full p-2 text-muted-foreground hover:bg-muted">
          <X className="h-5 w-5" />
        </button>
        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Дякуємо!</h3>
            <p className="mt-2 text-muted-foreground">Менеджер зателефонує вам найближчим часом.</p>
          </div>
        ) : (
          <>
            <div className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">FERM</div>
            <h3 className="text-2xl font-extrabold">Отримайте безкоштовну консультацію!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Залиште номер телефону — наш менеджер зателефонує та допоможе підібрати техніку під ваше завдання. Безкоштовно.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input required type="text" placeholder="Ваше ім'я"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="tel" placeholder="+380 ___ ___ __ __"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-primary py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.01] hover:bg-primary-dark">
                Зателефонуйте мені
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              або зателефонуйте самі:{" "}
              <a href="tel:0800750707" className="inline-flex items-center gap-1 font-bold text-primary">
                <Phone className="h-4 w-4" /> 0 800 75 07 07
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
