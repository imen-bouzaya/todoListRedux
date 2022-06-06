import React from 'react'
import EditTask from './EditTask'
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from "../redux/action";
const Task = ({tasks}) => {
  const dispatch=useDispatch();
  return (
    <div>
    {
    tasks.map((el)=> (
        <div >
          <h1 id={el.completed ? "done" : ""}> {el.description} </h1>
          <button onClick={() => dispatch(completeTask(el.id))}>{el.completed ? "Undo" : "Complete"} </button>
          <EditTask taskAncien={el} />
          <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Task