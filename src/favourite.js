
import React ,{useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
        marginLeft:'2%'
    },
    in:{
        backgroundColor:'#f73378',
        width:'15%',
    },

  }));
  
const Practice = ({title,course,ist,id,email,ondelete}) => {
    

    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <div>Title : {title}</div>
            <div className={classes.course}>Course : {course}</div>
            <div className={classes.ist}>Institute : {ist}</div>
            <div className={classes.button}>
            <Button>
            <FavoriteIcon color="primary" style={{ fontSize: "40px" }} />
            </Button>
            </div>
            <Button className={classes.in}>Practice</Button>
        </div>
     );
}
 
export default Practice;



