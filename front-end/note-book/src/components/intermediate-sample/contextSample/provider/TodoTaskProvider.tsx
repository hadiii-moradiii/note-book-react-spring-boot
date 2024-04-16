import { ReactNode, useReducer } from "react";
import TaskContext from "../context/TaskContext";
import todoListReducer from "../reducers/todoListReducer";

interface Props {
  children: ReactNode;
}
const TodoTaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(todoListReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TodoTaskProvider;
