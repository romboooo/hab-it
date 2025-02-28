interface DropDownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currDate: number
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, onClose, currDate }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
        right: "0",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      <button onClick={onClose} style={{ marginTop: "10px" }}>
        Закрыть
      </button>
      <h1 style={{color: "#000000"}} >{currDate}</h1>
    </div>
  );
};
export default DropDownMenu;
