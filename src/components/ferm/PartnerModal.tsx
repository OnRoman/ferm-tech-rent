import { useState } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";
import { submitToGoogleScript } from "@/config";

const phoneRe = /^(\+380|0)[\d\s\-()]{9,}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", equipmentType: "", city: "", website: "",
  });

  if (!open) return null;

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const valid =
    form.name.trim().length >= 2 &&
    phoneRe.test(form.phone.replace(/\s/g, "")) &&
    emailRe.test(form.email.trim()) &&
    form.equipmentType.trim().length > 0 &&
    form.city.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || submitting) return;
    if (form.website) return;
    setSubmitting(true);
    setError(null);
    try {
      await submitToGoogleScript({
        formType: "partner",
        name: form.name,
        phone: form.phone,
        email: form.email,
        equipmentType: form.equipmentType,
        city: form.city,
        source: "Лендінг — партнер (здати техніку)",
      });
      trackLead("Partner");
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", phone: "", email: "", equipmentType: "", city: "", website: "" });
        onClose();
      }, 3000);
    } catch {
      setError("Щось пішло не так. Зателефонуйте нам: 0 800 75 07 07");
    } finally {
      setSubmitting(false);
    }
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
            <p className="mt-2 text-muted-foreground">Ми зв'яжемось щодо партнерства.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold">Стати партнером FERM</h3>
            <p className="mt-1 text-sm text-muted-foreground">Заповніть форму — ми зв'яжемось з вами</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} className="hidden" aria-hidden="true" />
              <input required type="text" placeholder="Ім'я" value={form.name} onChange={update("name")} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="tel" placeholder="+380 ___ ___ __ __" value={form.phone} onChange={update("phone")} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="text" placeholder="Тип техніки" value={form.equipmentType} onChange={update("equipmentType")} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="text" placeholder="Місто" value={form.city} onChange={update("city")} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
              <button type="submit" disabled={!valid || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 font-bold text-accent-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50">
                {submitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Відправляємо...</>) : "Надіслати заявку"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
