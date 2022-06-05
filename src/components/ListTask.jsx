import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import Task from './Task'

const ListTask = () => {
    const {TASK}= useSelector (state => state) 
    return (
      <div>
        <AddTask />
        <Task tasks={TASK} />
      </div>
    );
  
}

export default ListTask