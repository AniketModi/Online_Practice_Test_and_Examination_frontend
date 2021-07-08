import React ,{useState , useHistory}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';



const useStyles = makeStyles(() => ({
    root:{
        border:"1px solid blue",
        marginLeft:"20px",
        marginRight:"20px",
        padding:'10px',
        display:"flex",
        height:"auto",
        fontSize:"25px",
    },
    H1:{
        fontWeight:"20px",
    },
    answer:{
        marginBottom:"20px",
        marginLeft:"20px",
        marginRight:"20px",
        border:"1px solid blue",
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
        backgroundColor :'#f73378',
        height:'50px',
    },
    index:{
        fontWeight:"bold",
    },
    option1:{
        flex:"1",
        margin:"auto",
        marginLeft:"20px",
        marginRight:"20px",
        fontSize:"20px",
        border:"1px solid blue",
        display:"flex"
    },
    optionA:{
        align:"center",
        margin:'auto'
    }
  }));

const  MCQ = ({e,index})=>{
    const classes = useStyles();
    const [temp,setTemp] = useState(false);

    function change(){
        setTemp(!temp);
    }

    return ( 
        <>
            <div className={classes.root}>
                <div className={classes.index}>Question:{index+1}</div>
                <div className={classes.question}>{e.que}</div>
                <div className={classes.marks}> marks = {e.marks}</div>
                <Button className={classes.in} onClick={change} >View</Button>
            </div>
            <div className={classes.option1}>
                <div className={classes.optionA}>A : {e.option[0]}</div>
                <div className={classes.optionA}>B : {e.option[1]}</div>
                <div className={classes.optionA}>C : {e.option[2]}</div>
                <div className={classes.optionA}>D : {e.option[3]}</div>
            </div>
            {
                temp &&
                <div className={classes.answer}>
                    <div > Answer = {e.answer}</div>
                </div>
            }
            
        </>
    )
}  

export default MCQ;