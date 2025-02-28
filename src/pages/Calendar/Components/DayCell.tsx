interface dayCellProps {
  day: number;
}

const dayCell: React.FC<dayCellProps> = ({ day }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%", 
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        color: "#fff", 
        fontSize: "16px",
        fontWeight: "bold",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        cursor: "pointer", 
        transition: "background-color 0.3s ease", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)"; 
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 
      }}
    >
      {day}
    </div>
  );
};
export default dayCell;
