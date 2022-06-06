import React from 'react'
import EditTask from './EditTask'
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, deleteTask, fltr } from "../redux/action";
const Task = ({tasks}) => {
  const {isFiltered}=useSelector(state=>state)
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(fltr())}>{isFiltered?"ALL":"Filter"}</button>
    {
      !isFiltered?
    <div>
      {
      
      tasks.map((el)=> (
          <div key={el.id}>
            <h1 id={el.completed ? "done" : ""}> {el.description} </h1>
            <button onClick={() => dispatch(completeTask(el.id))}>{el.completed ? "Undo" : "Complete"} </button>
            <EditTask taskAncien={el} />
            <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
          </div>
        ))}
    </div>
   :
   <div>
         {
      
     tasks.filter(t=>!t.completed).map((el)=> (
          <div key={el.id}>
            <h1 id={el.completed ? "done" : ""}> {el.description} </h1>
            <button onClick={() => dispatch(completeTask(el.id))}>{el.completed ? "Undo" : "Complete"} </button>
            <EditTask taskAncien={el} />
            <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
          </div>
        ))}
   </div> }
    </div>
  )
}

export default Task