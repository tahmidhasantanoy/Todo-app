/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const TodoCard = ({ task,handleDelete,handleEdit,handleComplete }) => {
  const { id, task_name, description, Priority, isComplete } = task;

  console.log(id, task_name, description, Priority, isComplete);

  return (
    <div className="bg-white rounded-lg p-2 flex justify-between items-center px-8 font-semibold my-3">
      <input
        // className={`mr-5 {${status == true}  ? bg-blue-600 :""}`}
        onClick={() => handleComplete(id)}
        type="checkbox"
        name="complete"
        id="complete"
        // checked ={!status}
      />
      <p className="flex-1 text-black">{task_name}</p>
      <p className="flex-1 text-black">{description}</p>
      <div className="flex flex-1 items-center space-x-2">
        <p
          className={`rounded-full size-2 
          
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
        <button onClick={() => handleEdit(id)} className="bg-yellow-500 p-2 rounded-md">
          <CiEdit className="text-white" />
        </button>
        <button onClick={() => handleDelete(id)} className="bg-red-600 p-2 rounded-md">
          <AiOutlineDelete className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
