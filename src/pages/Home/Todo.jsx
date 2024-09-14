import { Outlet } from "react-router-dom";
import Container from "../../components/Container";

const Todo = () => {
  return (
    <Container>
      <h3 className="text-center font-bold text-3xl my-14">My Todos </h3>
      <Outlet>
      </Outlet>
    </Container>
  );
};

export default Todo;
