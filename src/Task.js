const Task = ({ task }) => {
    return (
      <div className="second">
        <p> {task.comment}{' '}<span className="third">{task.username}</span></p>
      </div>
    )
  }
  
  export default Task