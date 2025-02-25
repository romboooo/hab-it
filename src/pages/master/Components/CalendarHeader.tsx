import { format } from "date-fns";
import { enUS } from "date-fns/locale";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const Calendar: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button type="button" className="btn btn-outline-light" onClick={onPrevMonth}>
            &lt;
        </button>
        <h2>{format(currentDate, "MMMM yyyy", { locale: enUS })}</h2>
        <button type="button" className="btn btn-outline-light" onClick={onNextMonth}> &gt;</button>
      </div>
    </>
  );
};

export default Calendar;
