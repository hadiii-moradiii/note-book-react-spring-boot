import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoListCount from "./components/TodoListCount";
import TodoTaskProvider from "./provider/TodoTaskProvider";

const SampleCustomProvider = () => {
  return (
    <TodoTaskProvider>
      <AddTodo />
      <br />
      <TodoListCount />
      <br />
      <TodoList />
    </TodoTaskProvider>
  );
};

export default SampleCustomProvider;
