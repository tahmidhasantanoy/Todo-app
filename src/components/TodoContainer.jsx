import { useEffect, useState } from "react";
import AddTodoModal from "./AddTodoModal/AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);


  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <AddTodoModal />
        <TodoFilter /*  priority={priority} setPriority={setPriority}  */ />
      </div>
      <div className="bg-primary-gradient rounded-2xl p-5 space-y-3 text-center">
      {tasks.length == 0 ? (
        <p>There is no tasks </p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <p key={task?.id}>{"task"}</p>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default TodoContainer;
