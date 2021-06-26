
import React ,{useState , useHistory}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';


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
  
const Practice = ({title,course,ist,id,email,onclick,onclick1}) => {
    

    const classes = useStyles();
    function change(){
        onclick({id:id});
    } 

    function change1(){
        onclick1({id:id});
    }

    return ( 
        <div className={classes.root}>
            <div>Title : {title}</div>
            <div className={classes.course}>Course : {course}</div>
            <div className={classes.ist}>Institute : {ist}</div>
            <div className={classes.button}>
            <Button onClick={change}>
                <FavoriteBorderRoundedIcon color="primary" style={{ fontSize: "40px" }} />
            </Button>
            </div>
            <Button className={classes.in} onClick={change1}>Practice</Button>
        </div>
     );
}
 
export default Practice;



