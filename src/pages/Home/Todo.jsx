import Container from "../../components/Container";
import TodoContainer from "../../components/TodoContainer/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h3 className="text-center font-bold text-3xl my-14">My Todos </h3>
      <TodoContainer/>
    </Container>
  );
};

export default Todo;
