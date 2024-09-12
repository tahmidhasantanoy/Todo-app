import AddTodo from "./Addtodo";
import AddTodoModal from "./AddTodoModal/AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <AddTodoModal />
        <TodoFilter /*  priority={priority} setPriority={setPriority}  */ />
      </div>
      <div className="bg-primary-gradient rounded-2xl p-5 space-y-3">
        {/* here code placed */}
        {/* <Button>btn</Button> */}
      </div>
    </div>
  );
};

export default TodoContainer;
