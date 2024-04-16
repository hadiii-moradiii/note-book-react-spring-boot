import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoListCount from "./components/TodoListCount";
import TaskContext from "./context/TaskContext";
import todoListReducer from "./reducers/todoListReducer";

const SampleContext = () => {
  const [tasks, dispatch] = useReducer(todoListReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <AddTodo />
      <br />
      <TodoListCount />
      <br />
      <TodoList />
    </TaskContext.Provider>
  );
};

export default SampleContext;
