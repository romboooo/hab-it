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
        top: "120%", 
        right: "-20px",
        transformOrigin: "top right", 
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "20px",
          height: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L11 11M11 1L1 11"
            stroke="#666"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <div style={{ 
        paddingTop: "30px",
        color: "#000000", 
        margin: "0 0 10px 0", 
        fontSize: "14px",
        fontWeight: "500",
        paddingRight: "20px", 
      }}>
        {currDate}
      </div>
    </motion.div>
  );
};
export default DropDownMenu;
