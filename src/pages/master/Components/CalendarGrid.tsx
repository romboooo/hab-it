import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

interface CalendarGridProps {
  currentDate: Date;
  onDayClick: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentDate,
  onDayClick,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const startDate = startOfWeek(currentDate);
  const endDate = endOfWeek(currentDate);

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        {weekDays.map((day) => (
          <div
            key={day}
            style={{ fontWeight: "bold", textAlign: "center", width: "14%" }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CalendarGrid;
