import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        'Здравствуйте! 👋 Я помощник ДемонтажСтрой. Чем могу помочь?'
      );
      setTimeout(() => {
        addBotMessage(
          'Вы можете задать вопрос или выбрать один из вариантов ниже:'
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuickResponse = (question: string, answer: string) => {
    addUserMessage(question);
    setTimeout(() => {
      addBotMessage(answer);
    }, 500);
  };

  const handleContactRequest = () => {
    addUserMessage('Хочу оставить свои данные');
    setTimeout(() => {
      addBotMessage(
        'Отлично! Пожалуйста, напишите нам ВКонтакте, и мы свяжемся с вами в ближайшее время:'
      );
      setTimeout(() => {
        addBotMessage(
          '👉 <a href="https://vk.com/a.korobko2025" target="_blank" rel="noopener noreferrer" class="text-orange-600 underline hover:text-orange-700">Написать ВКонтакте</a>'
        );
      }, 800);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');

    // Простая логика ответов на основе ключевых слов
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();

      if (
        lowerMessage.includes('цена') ||
        lowerMessage.includes('стоимость') ||
        lowerMessage.includes('сколько')
      ) {
        addBotMessage(
          'Стоимость работ зависит от объема и сложности проекта. Напишите нам ВКонтакте для точного расчета: https://vk.com/a.korobko2025'
        );
      } else if (
        lowerMessage.includes('контакт') ||
        lowerMessage.includes('связ') ||
        lowerMessage.includes('телефон')
      ) {
        addBotMessage(
          'Вы можете связаться с нами:\n📞 +7 (937) 246-44-42\n📞 +7 (902) 043-44-32\n💬 ВКонтакте: https://vk.com/a.korobko2025\n💬 Telegram: https://web.telegram.org/k/#@Fuck_this_love'
        );
      } else if (
        lowerMessage.includes('услуг') ||
        lowerMessage.includes('что делаете') ||
        lowerMessage.includes('работы')
      ) {
        addBotMessage(
          'Мы предоставляем:\n• Демонтаж зданий и сооружений\n• Снос конструкций\n• Демонтаж стен и перегородок\n• Вывоз мусора\n• Земляные работы\n\nПодробнее на странице "Услуги" на сайте.'
        );
      } else if (
        lowerMessage.includes('время') ||
        lowerMessage.includes('график') ||
        lowerMessage.includes('когда')
      ) {
        addBotMessage('Мы работаем круглосуточно, без выходных! 24/7');
      } else if (
        lowerMessage.includes('где') ||
        lowerMessage.includes('район') ||
        lowerMessage.includes('город')
      ) {
        addBotMessage(
          'Мы работаем в Саратове и Саратовской области. Бесплатный выезд на объект!'
        );
      } else {
        addBotMessage(
          'Спасибо за ваше сообщение! Для получения детальной информации, пожалуйста, свяжитесь с нами ВКонтакте: https://vk.com/a.korobko2025'
        );
      }
    }, 500);
  };

  const quickButtons = [
    {
      label: '📞 Как связаться?',
      question: 'Как с вами связаться?',
      answer:
        'Вы можете связаться с нами:\n📞 +7 (937) 246-44-42\n📞 +7 (902) 043-44-32\n💬 ВКонтакте: https://vk.com/a.korobko2025\n💬 Telegram: https://web.telegram.org/k/#@Fuck_this_love',
    },
    {
      label: '💰 Узнать цену',
      question: 'Сколько стоят ваши услуги?',
      answer:
        'Стоимость работ зависит от объема и сложности. Напишите нам ВКонтакте для бесплатного расчета: https://vk.com/a.korobko2025',
    },
    {
      label: '🔧 Какие услуги?',
      question: 'Какие услуги вы предоставляете?',
      answer:
        'Мы предоставляем:\n• Демонтаж зданий и сооружений\n• Снос конструкций\n• Демонтаж стен и перегородок\n• Вывоз строительного мусора\n• Земляные работы',
    },
    {
      label: '⏰ Режим работы',
      question: 'Когда вы работаете?',
      answer: 'Мы работаем круглосуточно, без выходных! 24/7',
    },
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-all hover:scale-110 z-50"
          aria-label="Открыть чат"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-orange-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-semibold">Помощник ДемонтажСтрой</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-orange-700 p-1 rounded transition-colors"
              aria-label="Закрыть чат"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: message.text.replace(/\n/g, '<br/>'),
                  }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleQuickResponse(button.question, button.answer)
                  }
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md transition-colors"
                >
                  {button.label}
                </button>
              ))}
            </div>
            <button
              onClick={handleContactRequest}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-semibold mb-2"
            >
              📝 Оставить свои данные
            </button>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Напишите сообщение..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"
              />
              <button
                onClick={handleSendMessage}
                className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition-colors"
                aria-label="Отправить"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
