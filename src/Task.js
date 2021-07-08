import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root:{
      position: 'relative',
      fontSize:"18px",
      margin:"5px"
    },
    comment:{
      color:'black',
      marginRight:'auto',
      fontSize:'20px',
      textAlign:'left',
    },

}));

const Task = ({ task }) => {
  const classes=useStyles();
    return (
      // <div className="second">
      //   <p> {task.comment}{' '}<span className="third">{task.username}</span></p>
      // </div>
      <div className={classes.root}>
      <div className={classes.comment}>{task.username}:  {task.comment}</div>
  </div>
)
  }
  
  export default Task