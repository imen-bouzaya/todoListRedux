import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
const EditTask = ({taskAncien}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
const [ancien, setAncien] = useState(taskAncien.description)
const handleChange=(e)=>{
    setAncien(e.target.value)   
  }
  const dispatch=useDispatch();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  const taskModifié={...taskAncien, description :  ancien}
dispatch(editTask(taskModifié))
closeModal();
  }
  
  return (
    <div>
<button onClick={openModal}>Edit Task</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input value={ancien} type="text" onChange={handleChange} />
          <button >Confirmer</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask