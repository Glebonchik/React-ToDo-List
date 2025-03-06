import { createContext } from "react";
import { TaskContextType } from "../interfaces/taskContextType";

export const TaskContext = createContext<TaskContextType>({
    selectedData: null,
    setSelectedData: () => {},
});