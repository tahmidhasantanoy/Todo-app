/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const TodoCard = ({
  task,
  handleDelete,
  handleTaskEdit,
  handleComplete,
  complete,
}) => {
  const [taskName, setTaskName] = useState("");
  const [task_description, setTask_description] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // console.log(complete);

  const { id, task_name, description, Priority, isComplete } = task;

  const handleEdit = (editId) => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatetask = tasksFromStorage?.find((task) => task?.id === editId); // find by id

    if (updatetask) {
      setTaskName(updatetask?.task_name);
      setTask_description(updatetask?.description);
      setTaskPriority(updatetask?.Priority);
    }

    setIsModalOpen(true);
  };

  const handleUpdateTask = (e, taskId) => {
    e.preventDefault();

    const currentTasks = JSON.parse(localStorage.getItem("tasks")) || tasks;

    const updatedTasks = currentTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          task_name: taskName || task.task_name,
          description: task_description || task.description,
          Priority: taskPriority || task.Priority,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    handleTaskEdit(updatedTasks);

    // Close modal after updating
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
            readOnly
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
                  value={taskName} // Correct binding here
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
                  value={task_description} // Bind correctly
                  className="ml-6 w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex justify-start items-center mb-12">
                <label htmlFor="">Priority</label>
                <div className="ml-12 dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn m-[0.3px]">
                    {taskPriority || Priority}{" "}
                    {/* Ensure taskPriority is used */}
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
              </div>

              <div className="flex justify-end modal-action">
                <button onClick={closeModal} className="btn btn-md rounded-md">
                  Cancel
                </button>
                <button
                  onClick={(e) => handleUpdateTask(e, id)}
                  type="submit"
                  className="btn btn-md rounded-md"
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
          checked={complete}
        />
        <p className="ml-4 text-start flex-1 text-black">{task_name}</p>
        <p className="ml-4 text-start flex-1 text-black">{description}</p>
        <div className="flex flex-1 justify-start items-center space-x-2">
          <p
            className={`rounded-full size-2 
          ${Priority === "High" ? "bg-red-500" : ""}
          ${Priority === "Medium" ? "bg-yellow-500" : ""}
          ${Priority === "Low" ? "bg-green-500" : ""}
`}
          ></p>
          <p className="">{Priority}</p>
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
            disabled={isComplete}
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
