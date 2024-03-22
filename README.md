# iss-test

## Рекомендуемая настройка IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Настройка конфигурации

Смотрите [Справочник по конфигурации Vite.](https://vitejs.dev/config/).

## Настройка проекта

```sh
npm install
```

### Компиляция и горячая перезагрузка для разработки

```sh
npm run dev
```

### Проверка типов, компиляция и минификация для продакшена

```sh
npm run build
```

### Запуск проекта в режиме продакшена
```sh
npm run start
```

### Линтинг с ESLint

```sh
npm run lint
```
