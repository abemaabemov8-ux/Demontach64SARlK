import { Building2, Hammer, Cog, Diamond, Trash2, Wrench } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: "Демонтаж зданий и сооружений",
      description: "Полный или частичный снос зданий любой этажности и назначения. Работаем с жилыми, коммерческими и промышленными объектами.",
      features: [
        "Демонтаж кирпичных и блочных зданий",
        "Снос железобетонных конструкций",
        "Демонтаж деревянных построек",
        "Разборка ангаров и складов",
      ],
    },
    {
      icon: <Hammer size={48} />,
      title: "Демонтаж конструкций",
      description: "Разборка несущих и ненесущих конструкций с сохранением целостности остальных элементов здания.",
      features: [
        "Демонтаж перегородок и стен",
        "Разборка перекрытий",
        "Снос балконов и лоджий",
        "Демонтаж крыш и кровли",
      ],
    },
    {
      icon: <Diamond size={48} />,
      title: "Алмазная резка и бурение",
      description: "Высокоточная резка бетона, железобетона и кирпича с минимальным уровнем шума и пыли.",
      features: [
        "Резка проемов в стенах",
        "Алмазное бурение отверстий",
        "Резка дорожных покрытий",
        "Работа в труднодоступных местах",
      ],
    },
    {
      icon: <Cog size={48} />,
      title: "Демонтаж оборудования",
      description: "Профессиональная разборка и демонтаж промышленного и бытового оборудования.",
      features: [
        "Демонтаж производственных линий",
        "Разборка станков и агрегатов",
        "Снятие инженерных систем",
        "Демонтаж вентиляции и кондиционеров",
      ],
    },
    {
      icon: <Wrench size={48} />,
      title: "Внутренние работы",
      description: "Демонтаж внутренних элементов помещений перед ремонтом или реконструкцией.",
      features: [
        "Демонтаж напольных покрытий",
        "Снятие настенных покрытий",
        "Демонтаж сантехники",
        "Разборка встроенной мебели",
      ],
    },
    {
      icon: <Trash2 size={48} />,
      title: "Вывоз строительного мусора",
      description: "Погрузка и утилизация строительных отходов с соблюдением всех экологических норм.",
      features: [
        "Погрузка мусора спецтехникой",
        "Вывоз на полигоны утилизации",
        "Сортировка отходов",
        "Уборка территории после работ",
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763478417204-85f71f1488a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVtb2xpdGlvbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzM5NDkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Услуги демонтажа"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl">
            Полный спектр демонтажных работ любой сложности
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block text-orange-600 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-orange-600 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Removed consultation box */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Заявка",
                description: "Вы оставляете заявку на сайте или звоните нам",
              },
              {
                step: "02",
                title: "Выезд на объект",
                description: "Специалист выезжает на объект и делает замеры",
              },
              {
                step: "03",
                title: "Расчет стоимости",
                description: "Предоставляем точную смету и заключаем договор",
              },
              {
                step: "04",
                title: "Выполнение работ",
                description: "Проводим демонтаж согласно утвержденному плану",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-orange-600 mb-4 opacity-20">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}