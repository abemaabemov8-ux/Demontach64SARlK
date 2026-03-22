import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { ChatBot } from "./ChatBot";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "О компании", path: "/about" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+79372464442" className="flex items-center gap-2 hover:text-orange-100">
              <Phone size={16} />
              +7 (937) 246-44-42
            </a>
          </div>
          <div className="hidden md:block">Работаем 24/7</div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-orange-600">ДЕМОНТАЖ</span>СТРОЙ
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-orange-600 transition-colors ${
                    isActive(item.path) ? "text-orange-600 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <a
              href="https://web.telegram.org/k/#@Fuck_this_love"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Заказать сейчас
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 px-4 ${
                    isActive(item.path) ? "text-orange-600 font-semibold bg-orange-50" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://web.telegram.org/k/#@Fuck_this_love"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 mx-4 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center"
              >
                Заказать сейчас
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-orange-600">ДЕМОНТАЖ</span>СТРОЙ
              </h3>
              <p className="text-gray-400">
                Лучший в Саратове сервис
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  +7 (937) 246-44-42
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  +7 (902) 043-44-32
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-gray-400">
                Круглосуточно, без выходных
              </p>
              <p className="text-gray-400 mt-2">
                Бесплатный выезд на объект
              </p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Мы в соцсетях</h4>
                <div className="flex gap-3">
                  <a
                    href="https://web.telegram.org/k/#@Fuck_this_love"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://vk.com/a.korobko2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    ВКонтакте
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ДемонтажСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}