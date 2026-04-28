const steps = [
  { n: 1, t: "Заявка", d: "Залишаєте заявку на сайті або телефонуєте" },
  { n: 2, t: "Уточнення", d: "Менеджер уточнює задачу та обсяг робіт" },
  { n: 3, t: "Підбір", d: "Підбираємо оптимальну техніку" },
  { n: 4, t: "КП", d: "Отримуєте комерційну пропозицію" },
  { n: 5, t: "Робота", d: "Техніка виходить на ваш об'єкт" },
];

export function Process() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Як замовити техніку</h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded bg-accent" />
        </div>
        <div className="relative mt-14">
          {/* Connector line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="flex flex-col items-center text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground shadow-lg ring-4 ring-background">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
