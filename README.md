# ДемонтажСтрой - Сайт компании по демонтажу

Профессиональный веб-сайт для компании, предоставляющей услуги демонтажа зданий и сооружений в Саратове.

## 🚀 Особенности

- ✅ Многостраничная структура (Главная, Услуги, О компании)
- ✅ Адаптивный дизайн для всех устройств
- ✅ Интерактивный чат-бот для консультаций
- ✅ Интеграция с Telegram и ВКонтакте
- ✅ Оранжево-серая цветовая схема
- ✅ SEO-оптимизация
- ✅ Профессиональные изображения
- ✅ Готов к публикации на GitHub Pages

## 📞 Контакты

- **Телефоны:** +7 (937) 246-44-42, +7 (902) 043-44-32
- **Telegram:** https://web.telegram.org/k/#@Fuck_this_love
- **ВКонтакте:** https://vk.com/a.korobko2025

## 🛠 Технологии

- React 18.3.1
- TypeScript
- React Router 7 (HashRouter для GitHub Pages)
- Tailwind CSS 4
- Vite 6
- Lucide React (иконки)

## 📦 Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

## 🌐 Развертывание на GitHub Pages

### Автоматическое развертывание (Рекомендуется)

1. **Создайте репозиторий на GitHub:**
   - Перейдите на [github.com](https://github.com) и создайте новый репозиторий
   - Назовите его, например: `demolition-saratov`

2. **Загрузите код в репозиторий:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_USERNAME/demolition-saratov.git
   git push -u origin main
   ```

3. **Настройте GitHub Pages:**
   - Откройте репозиторий на GitHub
   - Перейдите в **Settings** → **Pages**
   - В разделе **Source** выберите **GitHub Actions**
   - Сохраните изменения

4. **Автоматический деплой:**
   - GitHub Actions автоматически соберёт и опубликует сайт
   - Сайт будет доступен по адресу: `https://ВАШ_USERNAME.github.io/demolition-saratov/`

### Ручное развертывание

```bash
# Соберите проект
npm run build

# Содержимое папки dist загрузите в ветку gh-pages
```

### Альтернативные платформы

#### Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Импортируйте Git репозиторий
3. Vercel автоматически определит настройки
4. Нажмите "Deploy"

#### Netlify

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Перетащите папку `dist` после выполнения `npm run build`
3. Или подключите Git репозиторий для автоматического развертывания

## 📁 Структура проекта

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ChatBot.tsx      # Чат-бот
│   │   │   └── Layout.tsx       # Основной layout
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Главная страница
│   │   │   ├── Services.tsx     # Услуги
│   │   │   └── About.tsx        # О компании
│   │   ├── App.tsx
│   │   └── routes.tsx           # Настройки роутинга
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   └── main.tsx                 # Точка входа
├── index.html                   # HTML шаблон
├── package.json
└── vite.config.ts

```

## 🎨 Цветовая схема

- **Основной оранжевый:** #ea580c (orange-600)
- **Темный:** #111827 (gray-900)
- **Светлый:** #f9fafb (gray-50)

## 📝 Лицензия

© 2026 ДемонтажСтрой. Все права защищены.