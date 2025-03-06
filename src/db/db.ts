import { TaskType } from "../interfaces/tasksInterface";

export const tasks: TaskType = {
    "2-4-2025": ["Купить продукты", "Посетить врача"],
    "1-15-2025": ["Написать отчет", "Позвонить другу"],
    "11-31-2024": ["Сходить в спортзал", "Закончить проект"],
};

export const appendTask = (date: string, task: string) => {
    if (!tasks[date]){
        tasks[date]= []
    }
    tasks[date].push(task)
}


export const removeTask = (dateKey: string, index: number): void => {
    if (tasks[dateKey]) {
        tasks[dateKey].splice(index, 1);
    }
};