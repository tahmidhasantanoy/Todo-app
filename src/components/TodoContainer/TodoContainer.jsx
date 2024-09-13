import { useEffect, useState } from "react";
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import TodoFilter from "../TodoFilter";
import "./TodoContainer.css";
import TodoCard from "../TodoCard";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (deleteId) => {
    console.log(deleteId);

    const remainTasks = tasks?.filter((task) => task?.id != deleteId)
    console.log(remainTasks);
    setTasks(remainTasks)
  };

  const handleEdit = (editId) => {
    console.log(editId);
  };

  const handleComplete = (completeId) => {
    console.log(completeId);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <AddTodoModal />
        <TodoFilter /*  priority={priority} setPriority={setPriority}  */ />
      </div>
      <div className="bg-primary-gradient rounded-2xl p-5 space-y-3 text-center">
        {tasks.length == 0 ? (
          <p className="text-white font-sans text-2xl">No available task </p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <TodoCard
                key={task?.id}
                task={task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplete={handleComplete}
              ></TodoCard>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
