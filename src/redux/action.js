import EditTask from "../components/EditTask"
import { ADDTASK, EDITTASK,COMPLETE_TASK,DELETE_TASK } from "./typeAction"

export const add =(newTask)=>{
    return {
    type: ADDTASK,
    payload:newTask
}
}
export const editTask=(id)=>{
    return{
        type:EDITTASK,
        payload:id
    }
}
export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      payload: id,
    };
  };
  export const completeTask = (id) => {
    return {
      type: COMPLETE_TASK,
      payload: id,
    };
  };