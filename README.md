# React-ToDo-List

React-To-Do-List - простейшее веб-приложение, созданное для изучения основ React. Проект имеет кастомные хуки, константы, интерфейсы. Код написан на **TypeScript** для лучшей читаемости, типизации и дальнейшего развития. ДЛя кастомизации UI используется Tailwind.

## Основные функции
- Календарь
- Добавление и удаление задач на конкретный день
- Просмотр кол-во задач на конкретную дату


## Структура проекта

- **src/App.tsx**: Главная точка входа.
- **components/Mounth.tsx**: Компонент, возвращающий отдельно взятый месяц с датами.
- **components/Tab.tsx**: Отдельная ячейка (день) кажого месяца.
- **components/Tasks.tsx**: Окно доавления/удаление задачи.
- **styles/styles.js**: Содержит стили, используемые в приложении.
- **constants/**: Директория, содержащая константы, отвечающие названия дней недели и месяцев.
  - `dayOfWeek.ts`: назвзвания дней недели
  - `months.ts`: названия месяцев
- **db/db.ts**: Временная простая база данных, а также функции для добавления и удаления элементов.
- **hooks/createTasksContext.ts**: Кастомный хук для передачи стейта между дочерними компонентами
- **interfaces/**: Различные интерфейсы для определения типов пропов в различные компоненты и возвращаемых данных

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Glebonchik/React-ToDo-List.git
   cd React-ToDo-List

2. Установка зависемостей:
  ```bash
  yarn
