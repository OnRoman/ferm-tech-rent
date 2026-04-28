import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { trackLead } from "@/lib/pixel";

const techTypes = [
  "Екскаватор", "Автокран", "Самоскид", "Навантажувач", "Бульдозер",
  "Грейдер", "Підйомник", "Дорожня техніка", "Каток", "Інше",
];

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    // TODO: Підключити бекенд — наприклад, POST на /api/lead або відправка на sales@ferm.in.ua
    trackLead("MainForm");
    setSent(true);
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
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Ім'я / Назва компанії *</label>
                <input required type="text" maxLength={100}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Телефон *</label>
                  <input required type="tel" placeholder="+380 ___ ___ __ __" pattern="[\+0-9\s\-()]{10,20}"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">Email *</label>
                  <input required type="email" maxLength={255}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Тип техніки</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none">
                  <option value="">Оберіть тип техніки</option>
                  {techTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold">Коментар</label>
                <textarea rows={3} maxLength={1000}
                  placeholder="Опишіть задачу, обсяг робіт, локацію..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 focus:border-primary focus:outline-none" />
              </div>
              <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 h-4 w-4 accent-primary" />
                <span>Погоджуюсь на обробку персональних даних</span>
              </label>
              <button type="submit" disabled={!agree}
                className="w-full rounded-lg bg-accent py-4 text-base font-extrabold text-accent-foreground shadow-lg transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50">
                Отримати пропозицію
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
