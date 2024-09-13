import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Home/Todo";
import TodoContainer from "../components/TodoContainer/TodoContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
    children: [
      {
        path: "/",
        element: <TodoContainer />,
      },
    ],
  },
]);

export default router;
