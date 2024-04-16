import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import useTodo from "../hooks/useTodo";

const AddTodo = () => {
  //   const taskContext = useContext(TaskContext);
  const taskContext = useTodo(); // simple it by custom hooks

  const task = useRef<HTMLInputElement>(null);
  const addTask = () => {
    if (task.current && task.current.value) {
      taskContext.dispatch({ type: "ADD", task: task.current.value });
    }
  };

  return (
    <div>
      <TextField inputRef={task} variant="standard" label="task"></TextField>
      <Button variant="contained" onClick={addTask}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
