import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/action';
import EditTask from './EditTask';

const AddTask = () => {
    const dispatch=useDispatch();
const [text, setText] = useState("")
const handleChange=(e)=>{
    setText(e.target.value)   }
    
    const newTask={
        id:Math.random(),
        description : text,
        completed : false}
    

// let newT=newTask(text)
// const handleSubmit=(e)=>
// {
//     e.preventDefault(),
//     newTask(e.target.value)

// }
const ajouter=()=>{
   text.trim().length==0? alert ("the input is empty"): dispatch(add(newTask));
    setText("");

}

  return (
    <div>
      <form action="" onSubmit={(e)=>e.preventDefault()} >
          <input value={text} type="text" placeholder='add to do...' onChange={handleChange} />
          <button onClick={()=>ajouter()}>Add</button>
          
          </form>  
    </div>
  )
}

export default AddTask