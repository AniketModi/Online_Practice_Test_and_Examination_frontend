
import React ,{useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    root:{
        border:"1px solid blue",
        margin:"20px",
        padding:'10px',
        display:"flex",
        height:"64px",
        fontSize:"25px",
    },
    course:{
        marginLeft:'auto',
    },
    ist:{
        marginLeft:'auto',
    },
    button:{
        backgroundColor:'#f73378',
        marginLeft:'8%',
        width:'15%',
    }
  }));

const Exam = ({title,course,ist}) => {
    

    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <div>Title : {title}</div>
            <div className={classes.course}>Course : {course}</div>
            <div className={classes.ist}>Institute : {ist}</div>
            <Button className={classes.button}>Start Test</Button>
        </div>
     );
}
 
export default Exam;