/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const TodoCard = ({ task, handleDelete, handleTaskEdit, handleComplete }) => {
  const [task_description, setTask_description] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const { id, task_name, description, Priority, isComplete } = task;

  const handleEdit = (editId) => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatetask = tasksFromStorage?.find((task) => task?.id === editId);

    if (updatetask) {
      setTask_description(updatetask?.description);
      setTaskName(updatetask?.task_name);
    }

    setTimeout(() => {
      setIsModalOpen(true); // Open modal after state update
    }, 100);
  };

  const handleUpdateTask = (e, taskId) => {
    e.preventDefault();

    // Update the task by ID in tasks state
    const updatedTasks = tasks?.map((task) => {
      // want to send this data by DOM event
      if (task.id === taskId) {
        return {
          ...task,
          task_name: taskName,
          description: task_description,
          Priority: taskPriority,
        };
      }
      return task;
    });

    // Update local state to trigger re-render
    setTasks(updatedTasks);

    // Save to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    handleTaskEdit(updatedTasks);

    // Close modal
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <form onSubmit={(e) => handleUpdateTask(e, id)}>
          <input
            type="checkbox"
            id="my_modal_4"
            className="modal-toggle"
            checked
          />
          <div className="modal" role="dialog">
            <div className="border-[1.5px] border-purple-700 modal-box">
              <p className="font-semibold text-xl text-center pb-4">
                Update Task
              </p>

              <div className="mb-4 flex items-center">
                <label
                  htmlFor="task"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Task
                </label>
                <input
                  type="text"
                  name="task_name"
                  onChange={(e) => setTaskName(e.target.value)}
                  defaultValue={taskName} // Bind to state
                  className="ml-[70px] w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  onChange={(e) => setTask_description(e.target.value)}
                  defaultValue={task_description} // Bind to state
                  className="ml-6 w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex justify-start items-center mb-12">
                <label htmlFor="">Priority</label>
                {/*  */}
                <div className="ml-12 dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn m-[0.3px]">
                    {Priority}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-1 shadow"
                  >
                    <li>
                      <a onClick={() => setTaskPriority("High")}>High</a>
                    </li>
                    <li>
                      <a onClick={() => setTaskPriority("Medium")}>Medium</a>
                    </li>
                    <li>
                      <a onClick={() => setTaskPriority("Low")}>Low</a>
                    </li>
                  </ul>
                </div>
                {/*  */}
              </div>

              <div className="flex justify-end modal-action">
                <button
                  onClick={closeModal}
                  className="btn btn-md rounded-md py-"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => handleUpdateTask(e, id)}
                  type="submit"
                  className="btn btn-md rounded-md py-"
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* TodoCard */}
      <div className="bg-white rounded-lg p-2 flex justify-between items-center px-8 font-semibold my-3">
        <input
          onClick={() => handleComplete(id)}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="ml-4 text-start flex-1 text-black">{task_name}</p>
        <p className="ml-4 text-start flex-1 text-black">{description}</p>
        <div className="flex flex-1 items-center space-x-2">
          <p className="rounded-full size-2"></p>
          <p>{Priority}</p>
        </div>
        <p className="mr-12">
          {isComplete ? (
            <p className="text-green-600 font-semibold">Done</p>
          ) : (
            <p className="text-red-600 font-semibold">Pending</p>
          )}
        </p>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => handleEdit(id)}
            className="bg-yellow-500 p-2 rounded-md"
          >
            <label htmlFor="my_modal_4">
              <CiEdit className="text-white" />
            </label>
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-600 p-2 rounded-md"
          >
            <AiOutlineDelete className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
