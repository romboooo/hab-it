interface HabitProps{
    name: string;
}

const Habit: React.FC<HabitProps> = ({name}) => {
    return <>
        {name}
    </>
}

export default Habit;