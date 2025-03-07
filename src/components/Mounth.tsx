import Tab from "./Tab"
import { daysOfWeek } from "../constants/dayOfWeek"
import MonthProps from "../interfaces/monthProps";

const Month = ({daysInCurrentMonth, year, month}: MonthProps) => {
    const getDayOfWeek = (year: number, month: number, day: number): string => {
        const date = new Date(year, month, day); 
        return daysOfWeek[date.getDay()]; 
    };

    const tabs = [];
    const today = new Date;
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const isToday = today.getDate() === i && today.getMonth() === month && today.getFullYear() === year;
        const day = getDayOfWeek(year, month, i);
        tabs.push(<Tab key={`${month}-${i}-${year}`} day={i} month = {month} year={year} dayOfWeek={day} isToday={isToday} />);
    }

    return (
        <div className="border-3 border-blue-600 rounded-md h-[90%]  w-[90%] grid xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-3 gap-2 p-[0.5rem]  ">
           {tabs}
        </div>

        
    );
}

export default Month