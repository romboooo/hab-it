import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

interface dayCellProps {
  day: number;
  currentDate: Date;
  isCurrentDay: boolean;
  onClick: () => void;
}

const dayCell: React.FC<dayCellProps> = ({ day, isCurrentDay }) => {
  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);

  const changeDropDownMenuState = () => {
    setDropDownMenuOpen(!isDropDownMenuOpen);
  };

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: isCurrentDay ? "#007bff" : "rgba(255, 255, 255, 0.2)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = isCurrentDay
          ? "#0057a8"
          : "rgba(255, 255, 255, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isCurrentDay
          ? "#007bff"
          : "rgba(255, 255, 255, 0.2)";
      }}
      onClick={changeDropDownMenuState}
    >
      {day}
      <DropDownMenu isOpen={isDropDownMenuOpen} onClose={() => setDropDownMenuOpen(false) } currDate={day}></DropDownMenu>
    </div>
  );
};
export default dayCell;
