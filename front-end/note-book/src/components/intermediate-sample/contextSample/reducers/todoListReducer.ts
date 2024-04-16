
export interface Todo{
    id:number;
    task:string; 
}
export interface TodoListAction{
    type: 'ADD' | 'RESET';
    task : string;
}
const todoListReducer = (state:Todo[],action:TodoListAction):Todo[] => {
console.log(state);
  if(action.type === 'ADD') return [{ id: state.length +1,task: action.task},...state];
  if(action.type === 'RESET') return [];
  return state;
}

export default todoListReducer;
