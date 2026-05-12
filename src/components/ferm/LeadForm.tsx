import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";
import { submitToGoogleScript } from "@/config";

const techTypes = [
  "Екскаватор", "Автокран", "Самоскид", "Навантажувач", "Бульдозер",
  "Грейдер", "Підйомник", "Дорожня техніка", "Каток", "Інше",
];

const phoneRe = /^(\+380|0)[\d\s\-()]{9,}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", equipmentType: "", comment: "", website: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const valid =
    agree &&
    form.name.trim().length >= 2 &&
    phoneRe.test(form.phone.replace(/\s/g, "")) &&
    emailRe.test(form.email.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || submitting) return;
    if (form.website) return; // honeypot
    setSubmitting(true);
    setError(null);
    try {
      await submitToGoogleScript({
        formType: "main",
        name: form.name,
        phone: form.phone,
        email: form.email,
        equipmentType: form.equipmentType,
        comment: form.comment,
        source: "Лендінг — основна форма",
      });
      trackLead("MainForm");
      setSent(true);
      setForm({ name: "", phone: "", email: "", equipmentType: "", comment: "", website: "" });
    } catch {
      setError("Щось пішло не так. Зателефонуйте нам: 0 800 75 07 07");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="zayavka" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Залишити заявку — менеджер зв'яжеться найближчим часом
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Розкажіть про ваше завдання — ми підберемо техніку та підготуємо КП
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-primary/20 bg-card p-8 shadow-xl md:p-10">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <h3 className="mt-4 text-2xl font-extrabold">Дякуємо!</h3>
              <p className="mt-2 text-muted-foreground">
                Менеджер зв'яжеться з вами протягом 30 хвилин.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")}
                className="hidden" aria-hidden="true" />
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Ім'я / Назва компанії *</label>
                <input required type="text" maxLength={100} value={form.name} onChange={update("name")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Телефон *</label>
                  <input required type="tel" placeholder="+380 ___ ___ __ __" value={form.phone} onChange={update("phone")}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Email *</label>
                  <input required type="email" maxLength={255} value={form.email} onChange={update("email")}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Тип техніки</label>
                <select value={form.equipmentType} onChange={update("equipmentType")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none">
                  <option value="">Оберіть тип техніки</option>
                  {techTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Коментар</label>
                <textarea rows={3} maxLength={1000} value={form.comment} onChange={update("comment")}
                  placeholder="Опишіть задачу, обсяг робіт, локацію..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
              </div>
              <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-primary" />
                <span>Погоджуюсь на обробку персональних даних</span>
              </label>
              {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
              <button type="submit" disabled={!valid || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-4 text-base font-extrabold text-accent-foreground shadow-lg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50">
                {submitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Відправляємо...</>) : "Отримати пропозицію"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
