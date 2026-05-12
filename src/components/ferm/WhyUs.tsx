import fast from "@/assets/why/fast.png";
import price from "@/assets/why/price.png";
import complex from "@/assets/why/complex.png";
import fleet from "@/assets/why/fleet.png";
import payment from "@/assets/why/payment.png";
import ukraine from "@/assets/why/ukraine.png";
import operators from "@/assets/why/operators.png";
import bonus from "@/assets/why/bonus.png";

const items = [
  { img: fast, title: "Швидка подача", desc: "Техніка на об'єкті від 2 годин" },
  { img: price, title: "Конкурентна ціна", desc: "Привабливі тарифи по всіх категоріях" },
  { img: complex, title: "Комплексний підхід", desc: "Підбираємо техніку під будь-яке завдання" },
  { img: fleet, title: "5 000+ одиниць", desc: "Великий автопарк техніки по всій Україні" },
  { img: payment, title: "Гнучка оплата", desc: "Працюємо з ПДВ та без ПДВ" },
  { img: ukraine, title: "Вся Україна", desc: "Покриття у всіх великих містах" },
  { img: operators, title: "Оператори", desc: "Надаємо техніку з експертними операторами" },
  { img: bonus, title: "Бонусна програма", desc: "Знижки для постійних клієнтів" },
];

export function WhyUs() {
  return (
    <section className="relative bg-[#222220] py-20 overflow-hidden">
      <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#393735] opacity-30" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[40px] font-bold leading-tight text-white">Чому обирають FERM</h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-[160px] w-[160px] items-center justify-center">
                <img
                  src={img}
                  alt={title}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)]"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-base text-[#B2ADA8]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
