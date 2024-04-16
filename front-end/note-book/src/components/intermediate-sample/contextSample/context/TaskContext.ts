import React, { Dispatch } from "react";
import { Todo, TodoListAction } from "../reducers/todoListReducer";

interface TaskContextType{
    tasks: Todo[],
    dispatch: Dispatch<TodoListAction>
}

const TaskContext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;