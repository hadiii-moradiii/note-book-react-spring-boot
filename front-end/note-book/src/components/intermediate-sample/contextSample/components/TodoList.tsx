import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TodoList = () => {
  const taskContext = useContext(TaskContext);

  return (
    <>
      <ul>
        {taskContext.tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
