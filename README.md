#### Задача

Необходимо реализовать форму управления учетными записями.

Форма состоит из:

- Заголовка и кнопки добавления учетной записи.
- Подсказки для поля метка.
- Списка учетных записей с лейблами полей.

Учетная запись состоит из:

- Метка - Необязательное поле к заполнению. Максимум 50 символов. В поле вводятся текстовые метки, через знак ;
- Тип записи - Выпадающий список. Допускаются выборы из заранее предопределенных вариантов:
  - LDAP - При выборе этого типа - поле "Пароль" скрывается и сохраняется как null
  - Локальная - При выборе этого типа - поле "Пароль" показывается и сохраняется как введенное значение
- Логин - Обязательное к заполнению. Максимум 100 символов
- Пароль - Обязательное к заполнению. Отображается в случае выбора значения "Локальная" в поле "Тип записи". Максимум 100 символов
- Кнопки удаления учетной записи.

Требования к функциональности:

- По нажатию кнопки "+" в конец списка учетных записей, добавляется новая пустая запись, состоящая из: Метки, Типа записи, Логина, Пароля.
- При нажатии кнопки удаления, учетная запись должна полностью удалиться.
- По окончанию ввода значений в поля учетной записи (для текстовых - потеря фокуса, для селекта - изменение значения), происходит валидация обязательных полей. В случае валидности - учетная запись сохраняется/обновляется, в обратном, поля обозначаются красной обводкой.
- Все поля сохраняются в текстовом виде, кроме поле Метка. Оно должно преобразовываться в массив, где один элемент это строковое значение до ;. В массиве должен лежать объект, где поле text равно одному элементу метки - ({ text: элемент метки })
- Сохранение учетной записи должно происходить в стейт менеджер. При обновлении страницы, сохраненные учетные записи должны отображаться.

Основной стек:

- Vue + TypeScript
- Pinia
- Naive-UI + TailwindCss
- Vite

#### Реализация

1. Архитектура проекта Composition API с применением принципов FSD
2. pinia для хранения состояния проекта
   2.1 работа с localStorage
3. Naive UI и TailwindCss для стилизации

#### Структура проекта

```
.
├── index.html
├── src
│   ├── app              // App.vue "главный" файл
│   ├── assets           // иконки
│   ├── features         // сущность (учетная запись)
│   ├── pages            // страницы
│   ├── shared
│   │   ├── components   // переиспользуемые компоненты
│   │   └── ui           // элементы ui
│   ├── styles           // глобальные стили
│   └── main.ts          // инициализация приложения
```

#### Запуск проект

```
// клонирование репозитория
git clone git@github.com:MiggRabbid/test-task-CyberFormSystems

// установка зависимостей
make i

// установка зависимостей со сбросом кэша
make ir

// режим разработчика
make d

// сборка проекта
make b

// структура проекта
make rt
```

#### Стэк проекта

<a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="40" alt="TypeScript"/></a> <a title="VUE3" href="https://ru.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" height="40" alt="VUE3"/></a> <a title="Pinia" href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://pinia.vuejs.org/logo.svg" height="40" alt="Pinia"/></a> <a title="Naive Ui" href="https://www.naiveui.com/" target="_blank" rel="noreferrer"><img src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg" height="40" alt="Naive Ui"/></a> <a title="TailwindCss" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="40" alt="TailwindCss"/></a>
