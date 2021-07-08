import { useState } from 'react';
import './comment.css'

const AddTask = ({ onAdd }) => {
  //const [name, setName] = useState('Jay')
  const [comm, setComm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Here");
    if (!comm) {
      alert('Please add a comment')
      return
    }
    console.log("Comment is ", comm);
    onAdd({ comment: comm})
    //  setName('')
    setComm('')
  }

  return (
      <form className='inputWithButton' onSubmit={onSubmit}>
        <input
          type='text'
          value={comm}
          onChange={(e) => setComm(e.target.value)}
        />
      <button type='submit' value='Add Comment'>Add Comment</button>
      </form>
  )
}

export default AddTask;