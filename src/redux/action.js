import EditTask from "../components/EditTask"
import { ADDTASK, EDITTASK,COMPLETE_TASK,DELETE_TASK, FILTER_TASK } from "./typeAction"

export const add =(newTask)=>{
    return {
    type: ADDTASK,
    payload:newTask
}
}
export const editTask=(taskAncien)=>{
    return{
        type:EDITTASK,
        payload:taskAncien
    }
}
export const deleteTask = (id) => {
    return {
      type: DELETE_TASK,
      payload: id,
    };
  };
  export const fltr=()=>{
    return {
      type:FILTER_TASK
    }
  }
  export const completeTask = (id) => {
    return {
      type: COMPLETE_TASK,
      payload: id,
    };
  };