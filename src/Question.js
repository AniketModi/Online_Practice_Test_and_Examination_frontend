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
        height:"auto",
        fontSize:"25px",
    },
    question:{
        marginLeft:'auto',
    },
    marks:{
        marginLeft:'auto',
    },
    button:{
        marginLeft:'2%'
    },
    in:{
        marginLeft:'2%',
        backgroundColor:'#f73378',
        width:'10%',
    },

  }));

const  Questions = ({e,index})=>{
    console.log("JAY");
    const classes = useStyles();

    return ( 
    <div className={classes.root}>
        <div>Question:{index+1}</div>
        <div className={classes.question}>{e.que}</div>
        <div className={classes.marks}> marks = {e.marks}</div>
        <Button className={classes.in} >View</Button>
    </div>
    )
}  

export default Questions;