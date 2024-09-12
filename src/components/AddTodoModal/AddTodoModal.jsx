import { useState } from "react";
import Button from "../ui/Button/Button";

const AddTodoModal = () => {
  const [Priority, setPriority] = useState("Select priority");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const task_name = form.task_name.value;
    const description = form.description.value;
    const id = Math.random().toString(36).substring(2, 8);

    const addTaskInfo = {
      id,
      task_name,
      description,
      Priority,
    };

    console.log(id, task_name, description, Priority);

    const updateTasks = [...tasks, addTaskInfo];

    localStorage.setItem("tasks", JSON.stringify(updateTasks));

    setTasks(updateTasks)
  };

  return (
    <>
      {/* The button to open modal */}
      <Button>
        <label
          htmlFor="my_modal_6"
          className="btn bg-transparent border-none text-white hover:bg-transparent"
        >
          Add task
        </label>
      </Button>

      {/* Put this part before </body> tag */}
      <form action="" onSubmit={handleSubmit}>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="border-[1.5px] border-purple-700 modal-box">
            <p className="font-semibold text-xl text-center pb-4">
              Add new task
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
                id="task"
                className="ml-[70px] w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 .whitespace-nowrap"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="ml-6 w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="mb-12">
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
                    <a onClick={() => setPriority("High")}>High</a>
                  </li>
                  <li>
                    <a onClick={() => setPriority("Medium")}>Medium</a>
                  </li>
                  <li>
                    <a onClick={() => setPriority("Low")}>Low</a>
                  </li>
                </ul>
              </div>
              {/*  */}
            </div>
            <div className="flex justify-end modal-action">
              <label htmlFor="my_modal_6" className="btn btn-md rounded-md py-">
                Cancel
              </label>
              <button type="submit">
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-md rounded-md py-"
                >
                  Add task
                </label>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodoModal;
