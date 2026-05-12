import lightning from "@/assets/why/lightning.png";
import percent from "@/assets/why/percent.png";
import truck from "@/assets/why/truck.png";
import excavator from "@/assets/why/excavator.png";
import wallet from "@/assets/why/wallet.png";
import ukraine from "@/assets/why/ukraine.png";
import helmet from "@/assets/why/helmet.png";
import gift from "@/assets/why/gift.png";

const items = [
  { img: lightning, title: "Швидка подача", desc: "Техніка на об'єкті від 2 годин" },
  { img: percent, title: "Конкурентна ціна", desc: "Привабливі тарифи по всіх категоріях" },
  { img: truck, title: "Комплексний підхід", desc: "Підбираємо техніку під будь-яке завдання" },
  { img: excavator, title: "5 000+ одиниць", desc: "Великий автопарк техніки по всій Україні" },
  { img: wallet, title: "Гнучка оплата", desc: "Працюємо з ПДВ та без ПДВ" },
  { img: ukraine, title: "Вся Україна", desc: "Покриття у всіх великих містах" },
  { img: helmet, title: "Оператори", desc: "Надаємо техніку з експертними операторами" },
  { img: gift, title: "Бонусна програма", desc: "Знижки для постійних клієнтів" },
];

export function WhyUs() {
  return (
    <section className="bg-[#222220] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-5xl">Чому обирають FERM</h2>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <img src={img} alt={title} loading="lazy" width={160} height={160}
                className="h-32 w-32 object-contain drop-shadow-2xl md:h-40 md:w-40" />
              <h3 className="mt-6 text-xl font-bold text-white md:text-2xl">{title}</h3>
              <p className="mt-3 max-w-[220px] text-sm text-[#B2ADA8] md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
