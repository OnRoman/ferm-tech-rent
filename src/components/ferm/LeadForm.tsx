import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";
import { submitToGoogleScript } from "@/config";

const techTypes = [
  "Екскаватор", "Автокран", "Самоскид", "Навантажувач", "Бульдозер",
  "Грейдер", "Підйомник", "Дорожня техніка", "Каток", "Інше",
];

const phoneRe = /^(\+380|0)[\d\s\-()]{9,}$/;

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", phone: "", equipmentType: "", comment: "", website: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const valid =
    form.name.trim().length >= 2 &&
    phoneRe.test(form.phone.replace(/\s/g, ""));

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
        equipmentType: form.equipmentType,
        comment: form.comment,
        source: "Лендінг — основна форма",
      });
      trackLead("MainForm");
      setSent(true);
      setForm({ name: "", phone: "", equipmentType: "", comment: "", website: "" });
    } catch {
      setError("Щось пішло не так. Зателефонуйте нам: 0 800 75 07 07");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full rounded-lg border border-white/10 bg-[#1A1A1A] px-4 py-3 text-white placeholder:text-white/40 transition-colors focus:border-accent focus:outline-none";

  return (
    <section id="zayavka" className="bg-[#1A1A1A] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Залиште заявку — зв'яжемось з вами найближчим часом
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Розкажіть про ваше завдання — ми підберемо техніку та підготуємо КП
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-[#2A2A2A] p-8 shadow-xl md:p-10">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
              <h3 className="mt-4 text-2xl font-extrabold text-white">Дякуємо!</h3>
              <p className="mt-2 text-white/70">
                Менеджер зв'яжеться з вами протягом 30 хвилин.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")}
                className="hidden" aria-hidden="true" />
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">Ім'я / Назва компанії *</label>
                <input required type="text" maxLength={100} placeholder="напр., ООО Агроторг" value={form.name} onChange={update("name")}
                  className={inputCls} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">Телефон *</label>
                <input required type="tel" placeholder="+380 00 00 00 000" value={form.phone} onChange={update("phone")}
                  className={inputCls} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">Тип техніки</label>
                <select value={form.equipmentType} onChange={update("equipmentType")}
                  className={inputCls}>
                  <option value="">Оберіть тип техніки</option>
                  {techTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-white">Коментар</label>
                <textarea rows={3} maxLength={1000} value={form.comment} onChange={update("comment")}
                  placeholder="Опишіть задачу, обсяг робіт, локацію..."
                  className={inputCls} />
              </div>
              {error && <p className="text-sm font-semibold text-destructive">{error}</p>}
              <button type="submit" disabled={!valid || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-4 text-base font-extrabold text-accent-foreground shadow-lg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50">
                {submitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Відправляємо...</>) : "Надіслати"}
              </button>
              <p className="text-xs text-white/50">
                Натискаючи на кнопку, я даю згоду на обробку персональних даних, згідно з умовами{" "}
                <a href="https://ferm.in.ua/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Політики конфіденційності
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
