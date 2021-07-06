import React ,{useState , useHistory}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Question from './Question';
import MCQ from './MCQ';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Comments from './Comments';

const useStyles = makeStyles(() => ({
    head: {
        backgroundColor:"white",
        color:'#80A5EE',
        fontSize:'20pt',
        border:"2px solid #80A5EE"
      },
      row:{
        margin:'auto',
        border:'none'
      },
      rightToolbar: {
          margin:'auto',
        textAlign:'center'
      },        
    table: {
      marginTop:150,
      maxWidth: 1000,
      border:"4px solid #80A5EE",
    },
    app:{
        backgroundColor:"#F1757A",
        position:"static",
        marginBottom:"60px",

    },
    title2:{
       // marginLeft:10,
        margin:'auto',
        textAlign:'center',
    },
    leftToolbar:{
        textAlign:'center',
        margin:'auto'
    },

    main:{
        position:"static",
        marginBottom:'100px',
        flexGrow: 1,
    },
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
    mcq:{
        marginTop:"50px",
    },
    que:{
    },

  }));

 

const Paper = (e) => {

    const axios = require('axios');
    const id = e.match.params.id;
    const [data,setData] = useState([]);
    const [que,setQue] = useState([]);
    const [mcq,setMcq] = useState([]);
    const classes = useStyles()

    const [title,setTitle]=useState('');
    const [course,setCourse]=useState('');
    const [prof,setProf]=useState('');
    const [marks,setMarks]=useState('');
;
    React.useEffect(() => {

        async function func(){
            await axios
            .get(`http://localhost:4000/practice/view/${id}`)
            .then((e)=>{
                console.log(e.data);
                setData(e.data);
                setQue(e.data.desc);
                setMcq(e.data.mcq);
                setTitle(e.data.que_info.Title);
                setCourse(e.data.que_info.course);
                setProf(e.data.que_info.prof);
                setMarks(e.data.que_info.marks);
            })
            .catch((e)=>{
                console.log(e);
            })
        }
         
        func();
    }, [])

    return ( 
        <>
        <AppBar className={classes.app}>
        <Toolbar>
        <section className={classes.leftToolbar}>
                <Typography variant="h6">
                        Course:{course}
                </Typography>
                <Typography variant="h6">
                        Professor:{prof}
                </Typography>
            </section>
            <section className={classes.rightToolbar}>
                <Typography variant="h6">
                    Title:{title}
                </Typography>
                <Typography variant="h6">
                    Marks:{marks}
                </Typography>
            </section>
        </Toolbar>
        </AppBar>
        
        <div>
            <div className={classes.que}>
                {que.map((e,index)=>{
                    return <Question e={e} index={index}/>;
                })}
            </div>
            <div className={classes.mcq}>
                {mcq.map((e,index)=>{
                    return <MCQ e={e} index={index}/>;
                })}
            </div>
        </div>
        <Comments id={id}/>
        </>
     );
}
 


export default Paper;

/*

         <div className={classes.main}>
                <AppBar>
                    <Toolbar>
                        <div>
                            <div>Title : {data.que_info.Title} </div>
                            <div>Course:{data.que_info.course}</div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>



             <section className={classes.leftToolbar}>
            <Typography variant="h6">
                Course:{data.que_info.Course}
            </Typography>
            <Typography variant="h6">
                Professor:{data.que_info.Prof}
            </Typography>
            </section>
            <Typography variant="h6" className={classes.title2} align="center">Title:{e.data.Title}</Typography> 
        <section className={classes.rightToolbar}>
          <Typography variant="h6">
            Duration:{e.data.Duration}
          </Typography>
        </section>

*/