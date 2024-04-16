import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const useTodo = ()=> useContext(TaskContext);
export default useTodo;