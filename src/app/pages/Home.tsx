import { Link } from "react-router";
import { CheckCircle, Clock, Shield, Award, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      title: "Демонтаж зданий",
      description: "Полный и частичный демонтаж зданий и сооружений любой сложности",
    },
    {
      title: "Снос конструкций",
      description: "Демонтаж несущих и ненесущих конструкций с соблюдением всех норм",
    },
    {
      title: "Демонтаж оборудования",
      description: "Разборка и вывоз промышленного и бытового оборудования",
    },
    {
      title: "Алмазная резка",
      description: "Точная резка бетона, железобетона и кирпича",
    },
  ];

  const advantages = [
    {
      icon: <Clock size={40} />,
      title: "Быстрые сроки",
      description: "Выполняем работы точно в срок",
    },
    {
      icon: <Shield size={40} />,
      title: "Безопасность",
      description: "Полное соблюдение тхники безопасности",
    },
    {
      icon: <Award size={40} />,
      title: "15+ лет опыта",
      description: "Более 500 реализованных проектов",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Гарантия качества",
      description: "Документальное оформление работ",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1678944827354-fb54b9040a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzM5NDkyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Демонтажные работы"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Профессиональный демонтаж в Саратове
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Быстро, безопасно и по доступной цене
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://web.telegram.org/k/#@Fuck_this_love"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Заказать сейчас
            </a>
            <a
              href="https://vk.com/a.korobko2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Связаться в ВК
            </a>
            <a
              href="tel:+79372464442"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-800 transition-colors"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Подробнее об услугах
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-block text-orange-600 mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Современное оборудование
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Мы используем только современную спецтехнику и инструменты для демонтажных работ:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span>Экскаваторы и гидромолоты различной мощности</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span>Оборудование для алмазной резки и бурения</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span>Спецтехника для вывоза строительного мусора</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span>Профессиональный электро- и пневмоинструмент</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765959679018-f1436df42a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGRlbW9saXRpb24lMjBleGNhdmF0b3J8ZW58MXx8fHwxNzczOTQ5MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Современное оборудование"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наша команда</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Профессиональные специалисты с многолетним опытом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759542878135-bc80368e74ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzczOTAxNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Команда строителей"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636121195200-49bdb334c79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwd29ya2VycyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzM5OTAwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Работа с оборудованием"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMHNhZmV0eXxlbnwxfHx8fDE3NzM5OTAwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Безопасность на объекте"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHRlYW18ZW58MXx8fHwxNzczOTIyMjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Строительная команда"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Нужна консультация специалиста?
          </h2>
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
              Заказать сейчас
            </a>
            <a
              href="https://vk.com/a.korobko2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Связаться в ВК
            </a>
            <a
              href="tel:+79372464442"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-800 transition-colors"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}