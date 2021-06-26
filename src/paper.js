import React ,{useState , useHistory}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import Question from './Question';

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

 

const Paper = (e) => {

    
    const axios = require('axios');
    const id = e.match.params.id;
    const [data,setData] = useState([]);
    const [que,setQue] = useState([]);

    React.useEffect(() => {
        axios
        .get(`http://localhost:4000/practice/view/${id}`)
        .then((e)=>{
            console.log(e.data);
            setData(e.data);
            setQue(e.data.desc);

        })
        .catch((e)=>{
            console.log(e);
        })

    }, [])

    return ( 
        <>
            {que.map((e,index)=>{
                return <Question e={e} index={index}/>;
            })}
        </>
     );
}
 


export default Paper;