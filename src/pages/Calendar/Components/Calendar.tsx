import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import { addMonths, subMonths } from "date-fns";
import CalendarGrid from "./CalendarGrid";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const handleDayClick = (date: Date) => {
    console.log("Выбран день:", date);
  };
  return (
    <>
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarGrid currentDate={currentDate} onDayClick={handleDayClick} />
    </>
  );
};
export default Calendar;
