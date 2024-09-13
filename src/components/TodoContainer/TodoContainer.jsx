/* eslint-disable no-unused-vars */
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
  }, []); // i think the problem is here , not re-rendering 

  const handleDelete = (deleteId) => {

    const remainTasks = tasks?.filter((task) => task?.id != deleteId);
    console.log(remainTasks);
    setTasks(remainTasks);

    localStorage.setItem("tasks", JSON.stringify(remainTasks));
  };

  const handleEdit = (tasks) => {
    setTasks(tasks)
  };

  const handleComplete = (completeId) => {
    console.log(completeId);

    const completeTask = tasks?.filter((task) => task?.id == completeId);
    console.log(completeTask);

    const { id, task_name, description, Priority, isComplete } = completeTask;
    const updateComplete = {
      id,
      task_name,
      description,
      Priority,
      isComplete: true,
    };

    localStorage.setItem("tasks",JSON.stringify(updateComplete))
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
                handleTaskEdit={handleEdit}
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
