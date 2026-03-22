import { Users, Target, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const stats = [
    { number: "10+", label: "лет на рынке" },
    { number: "600+", label: "выполненных проектов" },
    { number: "30+", label: "единиц техники" },
    { number: "98%", label: "довольных клиентов" },
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: "Профессионализм",
      description:
        "Наша команда состоит из квалифицированных специалистов с многолетним опытом",
    },
    {
      icon: <Award size={40} />,
      title: "Качество",
      description:
        "Используем только проверенные технологии и современное оборудование",
    },
    {
      icon: <Users size={40} />,
      title: "Клиентоориентированность",
      description:
        "Индивидуальный подход к каждому проекту и гибкая система скидок",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Развитие",
      description:
        "Постоянно совершенствуем технологии и обучаем наших специалистов",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwc2FmZXR5JTIwaGVsbWV0c3xlbnwxfHx8fDE3NzM5NDkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="О компании"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl">
            Надежный партнер в сфере демонтажных работ с 2011 года
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Кто мы такие
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              <strong className="text-orange-600">ДемонтажСтрой</strong> — это команда профессионалов,
              специализирующихся на демонтажных работах любой сложности. С 2011 года мы успешно
              реализуем проекты по сносу зданий, демонтажу конструкций и утилизации строительного
              мусора в Саратове и Саратовской области.
            </p>
            <p>
              Наша компания оснащена современным парком спецтехники и профессиональным
              оборудованием, что позволяет нам выполнять работы быстро, качественно и с
              соблюдением всех норм безопасности. Мы работаем как с крупными строительными
              компаниями, так и с частными заказчиками.
            </p>
            <p>
              Все наши специалисты имеют необходимые допуски и сертификаты, регулярно проходят
              обучение и повышение квалификации. Мы гарантируем высокое качество работ,
              соблюдение сроков и конкурентные цены.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses and Certificates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Лицензии и сертификаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Лицензия МЧС",
                description: "Разрешение на проведение работ повышенной опасности",
              },
              {
                title: "Допуск СРО",
                description: "Членство в саморегулируемой организации строителей",
              },
              {
                title: "ISO 9001",
                description: "Сертификат системы менеджмента качества",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать работу?</h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://web.telegram.org/k/#@Fuck_this_love"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Написать в Telegram
            </a>
            <a
              href="https://vk.com/a.korobko2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Связаться в ВК
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}