# 🇷🇴 lingvoPRO

> Приложение для изучения румынского языка  
> Устанавливается как PWA на телефон и компьютер

**Живая ссылка:** [https://eugenek-13.github.io/LingvoPRO/](https://eugenek-13.github.io/LingvoPRO/)

---

## 📱 Установка как приложение (PWA)

### Android (Chrome)
1. Открой [https://eugenek-13.github.io/LingvoPRO/](https://eugenek-13.github.io/LingvoPRO/) в Chrome
2. Нажми меню **⋮** → **«Добавить на главный экран»**
3. Нажми **«Добавить»** — иконка появится на рабочем столе

### iPhone / iPad (Safari)
1. Открой [https://eugenek-13.github.io/LingvoPRO/](https://eugenek-13.github.io/LingvoPRO/) в Safari  
   *(Chrome на iOS не поддерживает установку PWA)*
2. Нажми кнопку **«Поделиться»** (📤)
3. Выбери **«На экран «Домой»»**
4. Нажми **«Добавить»**

### Компьютер (Chrome или Edge)
1. Открой [https://eugenek-13.github.io/LingvoPRO/](https://eugenek-13.github.io/LingvoPRO/)
2. В адресной строке появится значок **⊕ Установить**
3. Нажми → **«Установить»**
4. Приложение откроется в отдельном окне

---

## 🔧 Деплой своей копии

1. Fork этого репозитория
2. Settings → Pages → Source: **GitHub Actions**
3. Через 1-2 минуты готово: `https://ВАШ-ЛОГИН.github.io/LingvoPRO/`

---

## 📚 Что внутри

- **699 слов** в 29 уроках (А1 + А2)
- 8 режимов практики + интервальное повторение (SM-2)
- 12 живых диалогов
- Адаптивный тест определения уровня
- Грамматические подсказки перед уроками
- Полный офлайн через Service Worker

---

## 🗂️ Файлы

| Файл | Назначение |
|---|---|
| `index.html` | Всё приложение (один файл) |
| `manifest.json` | PWA-манифест (иконки, имя, режим) |
| `sw.js` | Service Worker (офлайн-кэш) |
| `icons/` | Иконки 72–512px |
| `.github/workflows/deploy.yml` | Автодеплой на GitHub Pages |
