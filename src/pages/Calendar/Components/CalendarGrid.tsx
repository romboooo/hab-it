import {
  endOfMonth,
  getDay,
  getDaysInMonth,
  isToday,
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
  const endWeekday = getDay(endOfMonth(currentDate));
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyCellsStart = Array.from({ length: startWeekday }, (_, i) => (
    <div key={`empty-${i}`} style={{ width: "40px", height: "40px" }} />
  ));
  const emptyCellsEnd = Array.from({ length: 6 - endWeekday }, (_, i) => (
    <div key={`empty-end-${i}`} style={{ width: "40px", height: "40px" }} />
  ));

  const totalCells = [
    ...emptyCellsStart,
    ...daysArray.map((day) => {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isCurrentDay = isToday(date);
      return (
        <DayCell
          key={day}
          day={day}
          currentDate={currentDate}
          isCurrentDay={isCurrentDay}
        />
      );
    }),
    ...emptyCellsEnd,
  ];
  const rows = [];
  for (let i = 0; i < totalCells.length; i += 7) {
    rows.push(totalCells.slice(i, i + 7));
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            style={{
              width: "40px",
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          {row}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
