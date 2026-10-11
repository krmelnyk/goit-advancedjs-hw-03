# Пошук зображень

Застосунок на Vite для пошуку фотографій Pixabay. HTTP-запити виконує Axios,
повідомлення показує iziToast, великі зображення відкриває SimpleLightbox.
Індикатор завантаження адаптовано з
[CSS Loaders](https://cssloaders.github.io/).

## Запуск

1. Виконай `npm ci`.
2. Отримай власний ключ у [Pixabay API](https://pixabay.com/api/docs/).
3. Створи в корені `.env.local` із рядком `VITE_PIXABAY_API_KEY=твій_ключ`. Цей
   локальний файл ігнорується Git. Після зміни ключа перезапусти Vite.
4. Виконай `npm run dev` та відкрий адресу з термінала.

Ключ Vite потрапляє у клієнтську збірку та доступний у браузері. Без
налаштованого ключа застосунок показує повідомлення при спробі пошуку.

## Структура

```text
.github/
assets/
src/
  css/
  img/
  js/
    pixabay-api.js
    render-functions.js
  index.html
  main.js
.editorconfig
.gitignore
.prettierrc.json
package-lock.json
package.json
README.md
vite.config.js
```

- `pixabay-api.js` — `getImagesByQuery(query)`, параметри Axios та повернення
  `data`.
- `render-functions.js` — галерея, SimpleLightbox і керування лоадером.
- `main.js` — обробка форми, перевірки результатів, повідомлення та помилки.

## Перевірка

- `npm run format` — форматування за допомогою Prettier.
- `npm run format:check` — перевірка форматування.
- `npm run build` — продакшн-збірка в `dist/`.
- `npm run preview` — локальний перегляд продакшн-збірки.

Перевір порожній і пробільний запит, успішний пошук, відсутність результатів,
помилку мережі, очищення попередньої галереї та відкриття великого зображення.
Лоадер має зникати після завершення як успішного, так і невдалого запиту.

## GitHub Pages

У налаштуваннях репозиторію додай Actions secret `VITE_PIXABAY_API_KEY`.
Workflow передає його Vite під час збірки. Push у `main` запускає збірку й
публікацію в `gh-pages`. У Settings → Pages обери цю гілку та кореневу папку.
Шлях збірки в `package.json` відповідає репозиторію `goit-advancedjs-hw-03`.
