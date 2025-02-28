import {
  getDay,
  getDaysInMonth,
  startOfMonth,
} from "date-fns";
import DayCell from "./DayCell";

interface CalendarGridProps {
  currentDate: Date;
  onDayClick: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate }) => {
  const daysInMonth = getDaysInMonth(currentDate);
  const startWeekday = getDay(startOfMonth(currentDate));
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const emptyCells = Array.from({ length: startWeekday }, (_, i) => (
    <div key={`empty-${i}`} style={{ width: "40px", height: "40px" }} />
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {emptyCells} 
      {daysArray.map((day) => (
        <DayCell key={day} day={day} />
      ))}
    </div>
  );
};

export default CalendarGrid;