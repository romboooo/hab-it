import { motion } from "framer-motion";

interface DropDownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currDate: number;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  isOpen,
  onClose,
  currDate,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 40, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: "120%", // Смещение ниже ячейки
        right: "-20px", // Смещение вправо
        transformOrigin: "top right", // Точка трансформации
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,}}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{ marginTop: "10px" }}
      >
        Закрыть
      </button>
      <h1 style={{ color: "#000000" }}>{currDate}</h1>
    </motion.div>
  );
};
export default DropDownMenu;
