# Мордовия — лендинг с анимациями

Статический сайт без сборки: HTML + CSS + JS.

```
mordovia/
├── index.html
├── css/style.css
├── js/main.js
└── assets/img/      ← сюда положите фото
```

## Фото
Положите в `assets/img/` файлы: `hero.jpg`, `saransk.jpg`, `museum.jpg`, `sanaksar.jpg`, `forest.jpg`, `food.jpg`, `wood.jpg`.
Пять фото (hero, saransk, sanaksar, forest, wood) подгружаются с Wikimedia Commons, см. `CREDITS.md`. Для museum и food пока градиенты. Свои файлы в `assets/img/` имеют приоритет.

## Запуск
Откройте `index.html` в браузере или выполните `python3 -m http.server`.

## GitHub Pages
Залейте папку в репозиторий → Settings → Pages → Branch: `main`, папка `/ (root)`.

## Что внутри
Загрузчик со счётчиком, посимвольное появление заголовков, параллакс фото, скос от скорости скролла, маски-раскрытия, 3D-наклон карточек, магнитные кнопки, кастомный курсор, бегущая строка, счётчики, скремблер меню, индикатор прокрутки на CSS `animation-timeline`. При `prefers-reduced-motion` анимации отключаются.
