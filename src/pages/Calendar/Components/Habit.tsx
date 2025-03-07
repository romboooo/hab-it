import { motion } from "framer-motion";

interface HabitProps{
    habit:HabitData;
    onToggle: () => void;
}
export interface HabitData{
    id: string;
    name: string;
    completed: boolean;
    color?: string;
}
const Habit: React.FC<HabitProps> = ({onToggle,habit}) => {
    return (
        <motion.div
          className="habit-item"
          onClick={onToggle}
          whileHover={{ scale: 1.02 }}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: habit.completed 
              ? (habit.color || "#e8f5e9") 
              : "transparent",
            marginBottom: "4px",
            transition: "all 0.2s ease",
          }}
        >
          <motion.div
            style={{
              width: "18px",
              height: "18px",
              border: `2px solid ${habit.color || "#4CAF50"}`,
              borderRadius: "4px",
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: habit.completed 
                ? (habit.color || "#4CAF50") 
                : "transparent",
            }}
            animate={{
              scale: habit.completed ? 1 : 0.9,
              opacity: habit.completed ? 1 : 0.8
            }}
          >
            {habit.completed && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </motion.svg>
            )}
          </motion.div>
    
          <span style={{
            fontSize: "14px",
            color: habit.completed ? "#2E7D32" : "#333",
          }}>
            {habit.name}
          </span>
        </motion.div>
      );
}

export default Habit;


// привычки должны приходить на клиент одним get запросом с сервера сразу на месяц
// календарь строится на привычках, передавая данные о привычках сверху по иерарахии
//todo: подсвечивать дни, когда все привычки выполнены
//начать бек
// разделить прогресс выполнения привычки от самой привычки

