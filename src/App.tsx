import { useState } from "react";
import Month from "./components/Mounth"
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { months } from "./constants/months";
import { TaskContext } from "./hooks/createTasksContext";
import Tasks from "./components/Tasks";

const App = () => {


  const today = new Date;
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedData, setSelectedData] = useState<string | null>(null);

  const getDaysInMonth = (year: number, month: number): number =>{
    return new Date(year, month, 0).getDate();
  }

  const daysInCurrentMonth = getDaysInMonth(selectedYear, selectedMonth + 1);

  const swipeMonthLeft = () => {
    if (selectedMonth - 1 < 0){
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
      return 
    }

    setSelectedMonth(selectedMonth - 1);
  }

  const swipeMonthRight = () => {
    if (selectedMonth + 1 > 11){
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
      return 
    }

    setSelectedMonth(selectedMonth + 1);
  }

  return (
    <TaskContext.Provider value={{ selectedData, setSelectedData }}>
    <div className="text-center">
      <h1 className="text-[] font-bold my-3">{months[selectedMonth]} {selectedYear}</h1>
      <div className="flex h-screen justify-center">
        <button className="mr-1" onClick={swipeMonthLeft}><GoTriangleLeft size={50}/></button>
        <Month daysInCurrentMonth = {daysInCurrentMonth} year = {selectedYear} month = {selectedMonth}/>
        <button className="ml-1" onClick={swipeMonthRight}><GoTriangleRight size={50}/></button>
      </div>
      {selectedData && (<Tasks selectedData={selectedData}/>)}
    </div>
    </TaskContext.Provider>
  )
}

export default App