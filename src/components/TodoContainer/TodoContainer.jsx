/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import "./TodoContainer.css";
import TodoCard from "../TodoCard";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import SeeMoreButton from "../ui/Button/SeeMoreButton/SeeMoreButton";
import Button from "../ui/Button/Button";

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  // const [filterItem, setFilterItem] = useState(""); // for search
  // const [VisibleItem, setVisibleItem] = useState(6);
  // const [taskPriority, setTaskPriority] = useState("Filter"); // This is filter state

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []); // i think the problem is here , not re-rendering

  // const handleDelete = (deleteId) => {
  //   const remainTasks = tasks?.filter((task) => task?.id != deleteId);
  //   console.log(remainTasks);
  //   setTasks(remainTasks);

  //   localStorage.setItem("tasks", JSON.stringify(remainTasks));
  // };

  // const handleEdit = (tasks) => {
  //   setTasks(tasks);
  // };

  // const handleComplete = (completeId) => {
  //   console.log(completeId);

  //   const completeTask = tasks?.map((task) => {
  //     if (task?.id == completeId) {
  //       return {
  //         ...task, //merging here
  //         task_name: task?.task_name,
  //         description: task?.description,
  //         Priority: task?.Priority,
  //         isComplete: true,
  //       };
  //     }
  //     return task;
  //   });

  //   console.log(completeTask);

  //   localStorage.setItem("tasks", JSON.stringify(completeTask));

  //   setTasks(completeTask);
  // };

  // const searchItems = tasks?.filter(
  //   (task) =>
  //     !filterItem ||
  //     task?.task_name?.toLowerCase().includes(filterItem.toLowerCase())
  // );

  // const filterSearch = tasks?.filter(
  //   (task) =>
  //     taskPriority === "Filter" || // If "Filter" is selected, show all tasks
  //     task?.Priority?.toLowerCase() === taskPriority.toLowerCase() // Else, filter by priority
  // );

  // const handleClear = () => setFilterItem("");

  // const filteredTasks = tasks?.filter((task) => {
  //   // Filter by priority
  //   const matchesPriority =
  //     taskPriority === "Filter" ||
  //     task?.Priority?.toLowerCase() === taskPriority.toLowerCase();

  //   // Filter by search term
  //   const matchesSearch =
  //     !filterItem ||
  //     task?.task_name?.toLowerCase().includes(filterItem.toLowerCase());

  //   // Only return tasks that match both conditions
  //   return matchesPriority && matchesSearch;
  // });

  // console.log(filteredTasks.length);

  // const handleSeeMore = () => {
  //   setVisibleItem((prevVisibleClass) => prevVisibleClass + 6);
  // };

  return (
    <>
      <div className=".flex .items-center .justify-between .mb-5">
        <>
          <AddTodoModal />

          {/* <div className="flex justify-start items-center">
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
          </div> */}
        </>
        {/* <div className="flex justify-center items-center">
          <div className="flex justify-center items-center m-0 p-0">
            <div className="relative w-full">
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
        </div> */}
      </div>
      {/* <div className="bg-primary-gradient rounded-2xl p-5 space-y-3 text-center">
        {tasks.length == 0 ? (
          <p className="text-white font-sans text-2xl">No available task </p>
        ) : (
          <ul>
            <div className="bg-white rounded-lg py-1 flex justify-around items-center font-semibold my-3">
              <p className="ml-4 text-start flex-1 text-black">Name of task</p>
              <p className="text-start flex-grow text-black">Description</p>
              <p className="text-start flex-grow text-black">Priority</p>
              <p className="flex-grow text-black">Status</p>
              <p className="mr-6">Action</p>
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
      </div> */}
      {/* {VisibleItem < tasks?.length && (
        <div className="flex justify-center py-2">
          <SeeMoreButton onClick={() => handleSeeMore()}>
            See more
          </SeeMoreButton>
        </div>
      )} */}
    </>
  );
};

export default TodoContainer;
