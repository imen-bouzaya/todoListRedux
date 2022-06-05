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
const EditTask = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
const [text, setText] = useState("")
const handleChange=(e)=>{
    setText(e.target.value)   
  }
  const dispatch=useDispatch();
  const handleEdit=(el, text)=>{
dispatch(editTask(el.id,text))
  }
  
  return (
    <div>
<button onClick={openModal}>Edit Task</button>
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Edit Task</h2>
        <form>
          <input value={text} type="text" placeholder='add to do...' onChange={handleChange} />
          <button onClick={handleEdit}>Confirmer</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask