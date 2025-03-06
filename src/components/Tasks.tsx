import { TaskProps, TaskType } from "../interfaces/tasksInterface";
import { tasks } from "../db/db"
import { useState } from "react";
import { appendTask, removeTask } from "../db/db";

const Tasks = ({selectedData}: TaskProps) => {

    const [tasksState, appendNewTask] = useState<TaskType>(tasks);
    const [formStatus, switchFormStatus] = useState(false);
    const [newTask, setNewTask] = useState("");


    const taskList = tasksState[selectedData] || [];

    const handleAddTask = () =>{
        if (newTask.trim() !== ""){
            appendTask(selectedData, newTask);
            appendNewTask({...tasksState});
            setNewTask("");
            switchFormStatus(false);
        }
    }

    const handleRemoveTask = (index: number) => {
        removeTask(selectedData, index);
        appendNewTask({ ...tasksState });
    }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 p-4 shadow-lg">
        <h2 className="text-lg font-bold">
            Задачи на {selectedData}
        </h2>
        <ul>
                {taskList.length > 0 ? (
                    taskList.map((task, index) => <li className="text-[1.25em] mx-[3px] my-1" key={index}>{task} <button className="text-[0.75em] rounded bg-red border-1 p-1" onClick={() => handleRemoveTask(index)}>Удалить</button></li> )
                ) : (
                    <li>Нет задач на этот день</li>
                )}
        </ul>
        <button className="text-[0.75em] rounded border-1 p-1" onClick={() => switchFormStatus(true) }>Добавить задачу</button>

        {formStatus && (
             <div className="absolute h-[200px] w-[400px] inset-0 bg-white border-2 border-gray-300 p-4 shadow-lg">
             <form
                 onSubmit={(e) => {
                     e.preventDefault(); 
                     handleAddTask();
                 }}
             >
                 <input
                     type="text"
                     value={newTask}
                     onChange={(e) => setNewTask(e.target.value)}
                     placeholder="Введите новую задачу"
                     className="border-2 border-gray-300 p-2 mb-2 w-full"
                 />
                 <div className="flex justify-end">
                     <button
                         type="submit"
                         className="text-[0.75em] rounded border-1 p-1 bg-green-200"
                     >
                         Добавить
                     </button>
                     <button
                         type="button"
                         className="text-[0.75em] rounded border-1 p-1 ml-2 bg-gray-200"
                         onClick={() => switchFormStatus(false)}
                     >
                         Отмена
                     </button>
                 </div>
             </form>
         </div>
        )}
    </div>
)
}

export default Tasks