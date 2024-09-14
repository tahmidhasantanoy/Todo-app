import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import TodoCard from "../TodoCard";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import SeeMoreButton from "../ui/Button/SeeMoreButton/SeeMoreButton";

const AddTodoModal = () => {
  const [Priority, setPriority] = useState("Select priority");
  const [tasks, setTasks] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [VisibleItem, setVisibleItem] = useState(6);
  const [taskPriority, setTaskPriority] = useState("Filter");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Log whenever tasks are updated (for debugging purposes)
  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  /* Todo container logic add new */
  const handleComplete = (completeId) => {
    console.log(completeId);

    const completeTask = tasks?.map((task) => {
      if (task?.id == completeId) {
        return {
          ...task, //merging here
          task_name: task?.task_name,
          description: task?.description,
          Priority: task?.Priority,
          isComplete: true,
        };
      }
      return task;
    });

    console.log(completeTask);

    localStorage.setItem("tasks", JSON.stringify(completeTask));

    setTasks(completeTask);
  };

  const handleEdit = (tasks) => {
    setTasks(tasks);
  };

  const handleDelete = (deleteId) => {
    const remainTasks = tasks?.filter((task) => task?.id != deleteId);
    console.log(remainTasks);
    setTasks(remainTasks);

    localStorage.setItem("tasks", JSON.stringify(remainTasks));
  };

  const filteredTasks = tasks?.filter((task) => {
    // Filter by priority
    const matchesPriority =
      taskPriority === "Filter" ||
      task?.Priority?.toLowerCase() === taskPriority.toLowerCase();

    // Filter by search term
    const matchesSearch =
      !filterItem ||
      task?.task_name?.toLowerCase().includes(filterItem.toLowerCase());

    // Only return tasks that match both conditions
    return matchesPriority && matchesSearch;
  });

  const handleClear = () => setFilterItem("");

  const handleSeeMore = () => {
    setVisibleItem((prevVisibleClass) => prevVisibleClass + 6);
  };
  /* Todo container logic add new */

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const task_name = form.task_name.value;
    const description = form.description.value;
    const id = Math.random().toString(36).substring(2, 8);

    // New task to add
    const newTask = {
      id,
      task_name,
      description,
      Priority,
      isComplete: false,
    };

    // Update the state with new task
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Store in localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Close modal after adding task
    document.getElementById("my_modal_6").checked = false;

    // Reset form after submission
    form.reset();
    setPriority("Select priority");
  };

  return (
    <>
      {/* The button to open modal */}
      <div className="flex">
        <Button>
          <label
            className="bg-transparent border-none text-white hover:bg-transparent text-nowrap"
            htmlFor="my_modal_6"
          >
            Add task
          </label>
        </Button>
        {/* add new */}
        <div className=".flex justify-start items-center">
          <div className="ml-12 md:ml-60 xl:ml-[720px] dropdown dropdown-bottom">
            <Button tabIndex={0} role="button" className="">
              {taskPriority}
            </Button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-1 shadow"
            >
              <li>
                <a onClick={() => setTaskPriority("Filter")}>Show all</a>
              </li>
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
        {/* add new */}

        {/* add new */}
        <div className="relative w-full mt-2">
          <input
            value={filterItem}
            onChange={(e) => setFilterItem(e.target.value)}
            className="w-full py-3 px-4 pl-10 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            type="text"
            placeholder="Search for todo..."
          />
          {filterItem && (
            <p className="text-center font-bold">
              Search for : <span className="text-error">{filterItem}</span>
            </p>
          )}
          <button className="absolute btn-outline left-0 top-[8px] px-4 flex items-cente text-white rounded-l-lg hover:bg-white hover:bg-opacity-10 hover:shadow-none focus:outline-none transition-all duration-300">
            <FaSearch className="w-4 h-8 btn-outline hover:btn-outline hover:bg-transparent transition-all duration-300" />
          </button>

          {filterItem && (
            <button
              onClick={handleClear}
              className="absolute right-2 top-[15px] btn-outline hover:rounded-full text-gray-500 hover:text-black hover:bg-white focus:outline-none transition-all duration-300"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      {/* add new */}

      {/* Task List (to reflect the updated tasks) */}
      <div className="bg-primary-gradient rounded-2xl p-5 space-y-3 text-center">
        {tasks.length == 0 ? (
          <p className="text-white font-sans text-2xl">No available task </p>
        ) : (
          <ul>
            <div className="bg-white rounded-lg py-1 flex justify-around items-center font-semibold my-3">
              <p className="ml-12 text-start flex-1 text-black">Task name</p>
              <p className="ml-8 text-center flex-grow text-black">Description of todo</p>
              <p className="text-center flex-grow text-black">Todo priority</p>
              <p className="ml-12 flex-grow text-black">Status</p>
              <p className="mr-12">Action</p>
            </div>
            {filteredTasks?.slice(0, VisibleItem).map((task) => (
              <TodoCard
                key={task?.id}
                task={task}
                handleDelete={handleDelete}
                handleTaskEdit={handleEdit}
                handleComplete={handleComplete}
                complete={task?.isComplete}
              ></TodoCard>
            ))}
          </ul>
        )}
      </div>

      {/* Modal form */}
      <form action="" onSubmit={handleSubmit}>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="border-[1.5px] border-purple-700 modal-box">
            <p className="font-semibold text-xl text-center pb-4">
              Add new task
            </p>

            {/* Task name */}
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
                placeholder="Add task"
                id="task"
                className="ml-[70px] w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Task description */}
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
                placeholder="Write description"
                id="description"
                className="ml-6 w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Priority */}
            <div className="mb-12">
              <label htmlFor="">Priority</label>
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
            </div>

            {/* Submit and cancel buttons */}
            <div className="flex justify-end modal-action">
              <label htmlFor="my_modal_6" className="btn btn-md rounded-md py-">
                Cancel
              </label>
              <button type="submit" className="btn btn-md rounded-md py-">
                Add task
              </button>
            </div>
          </div>
        </div>
      </form>
      {VisibleItem < tasks?.length && (
        <div className="flex justify-center py-2">
          <SeeMoreButton onClick={() => handleSeeMore()}>
            See more
          </SeeMoreButton>
        </div>
      )}
    </>
  );
};

export default AddTodoModal;
