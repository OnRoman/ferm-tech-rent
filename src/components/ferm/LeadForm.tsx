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
    if (form.website) return;
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

  return (
    <section id="zayavka" className="bg-[#F5F3F1] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#141413] md:text-4xl">
            Залиште заявку — зв'яжемось з вами найближчим часом
          </h2>
          <p className="mt-3 text-lg text-[#908C88]">
            Розкажіть про ваше завдання — ми підберемо техніку та підготуємо КП
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 shadow-xl md:p-10">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-[#5C9803]" />
              <h3 className="mt-4 text-2xl font-extrabold text-[#141413]">Дякуємо!</h3>
              <p className="mt-2 text-[#908C88]">Менеджер зв'яжеться з вами протягом 30 хвилин.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")}
                className="hidden" aria-hidden="true" />
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#141413]">Ім'я / Назва компанії *</label>
                <input required type="text" maxLength={100} value={form.name} onChange={update("name")}
                  placeholder="напр., ООО Агроторг"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#141413] placeholder:text-[#908C88] focus:border-[#5C9803] focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#141413]">Номер телефону *</label>
                <input required type="tel" placeholder="+380 00 00 00 000" value={form.phone} onChange={update("phone")}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#141413] placeholder:text-[#908C88] focus:border-[#5C9803] focus:outline-none" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#141413]">Тип техніки *</label>
                <select value={form.equipmentType} onChange={update("equipmentType")}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#141413] focus:border-[#5C9803] focus:outline-none">
                  <option value="">Оберіть тип техніки</option>
                  {techTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#141413]">Коментар</label>
                <textarea rows={3} maxLength={1000} value={form.comment} onChange={update("comment")}
                  placeholder="Опишіть задачу, обсяг робіт, локацію..."
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#141413] placeholder:text-[#908C88] focus:border-[#5C9803] focus:outline-none" />
              </div>
              <p className="text-xs text-[#B2ADA8]">
                Натискаючи на кнопку, я даю згоду на обробку персональних даних, згідно з умовами{" "}
                <a href="https://ferm.in.ua/privacy" className="underline hover:text-[#5C9803]">Політики конфіденційності</a>
              </p>
              {error && <p className="text-sm font-semibold text-red-500">{error}</p>}
              <button type="submit" disabled={!valid || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F9D223] py-4 text-base font-extrabold text-[#141413] shadow-lg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50">
                {submitting ? (<><Loader2 className="h-5 w-5 animate-spin" /> Відправляємо...</>) : "Надіслати"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
