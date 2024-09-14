import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../components/Container";

const Todo = () => {
  return (
    <Container>
      <motion.h3
        className="text-center font-bold text-3xl my-14"
        initial={{ scale: 0.8 }}  
        animate={{ scale: [1.2, 0.9, 1] }}  
        transition={{
          duration: 0.8,  
          ease: "easeInOut", 
          times: [0, 0.2, 1],  
          repeat: 8,  
          repeatType: "reverse",
        }}
      >
        My Todos
      </motion.h3>
      <Outlet />
    </Container>
  );
};

export default Todo;
