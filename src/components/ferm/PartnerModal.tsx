import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";

export function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Підключити бекенд (наприклад, відправка на sales@ferm.in.ua)
    trackLead("Partner");
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md rounded-2xl bg-card p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 rounded-full p-2 text-muted-foreground hover:bg-muted">
          <X className="h-5 w-5" />
        </button>
        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Дякуємо!</h3>
            <p className="mt-2 text-muted-foreground">Менеджер зв'яжеться з вами.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold">Стати партнером FERM</h3>
            <p className="mt-1 text-sm text-muted-foreground">Заповніть форму — ми зв'яжемось з вами</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input required type="text" placeholder="Ім'я" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="tel" placeholder="+380 ___ ___ __ __" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="text" placeholder="Тип техніки" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="text" placeholder="Місто" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <button type="submit" className="w-full rounded-lg bg-accent py-3.5 font-bold text-accent-foreground transition-transform hover:scale-[1.01]">
                Надіслати заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
