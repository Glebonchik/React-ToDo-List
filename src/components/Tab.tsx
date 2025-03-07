import TabProps from "../interfaces/tabProps"
import { useContext } from "react"
import { TaskContext } from "../hooks/createTasksContext"
import { tasks } from "../db/db"

const Tab = ({day, month, year, dayOfWeek, isToday}: TabProps) => {

  const {selectedData, setSelectedData} = useContext(TaskContext);

const showTasks = () => {
    const dateKey = `${month}-${day}-${year}`;

    if (selectedData === dateKey) {
        setSelectedData(null); 
    } else {
        setSelectedData(dateKey);
    }
};

  return (
    <div className={`flex  text-center items-center ` } onClick={showTasks }>
        <div className={`border-2 ${isToday ? "bg-blue-200/50" : ""} border-black w-[3rem] h-[3rem] text-center flex justify-center items-center`}>
            {day}
        </div>
        <div className={`text-center ${isToday ? "bg-blue-200/50" : ""} pl-[5px]`}>
            <p>{dayOfWeek}</p> 
            <p>{tasks[`${month}-${day}-${year}`]?.length || "0"}</p>  
        </div>
    </div>
  )
}

export default Tab