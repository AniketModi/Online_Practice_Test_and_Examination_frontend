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
        width:'',
    },
    index:{
        fontWeight:"bold",
    },

  }));

const  Questions = ({e,index})=>{
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
            {
                temp &&
                <div className={classes.answer}>
                    <div > Answer = {e.answer}</div>
                </div>
            }
            
        </>
    )
}  

export default Questions;