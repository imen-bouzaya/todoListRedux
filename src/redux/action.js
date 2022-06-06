import EditTask from "../components/EditTask"
import { ADDTASK, EDITTASK,COMPLETE_TASK,DELETE_TASK } from "./typeAction"

export const add =(newTask)=>{
    return {
    type: ADDTASK,
    payload:newTask
}
}
export const editTask=(taskAncien, text)=>{
    return{
        type:EDITTASK,
        payload:taskAncien,text
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