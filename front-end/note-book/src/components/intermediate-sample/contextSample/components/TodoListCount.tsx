import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TodoListCount = () => {
  const { tasks } = useContext(TaskContext);
  return <div>Task Count is {tasks.length}</div>;
};

export default TodoListCount;
