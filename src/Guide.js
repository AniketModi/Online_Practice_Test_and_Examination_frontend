import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// // import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const useStyles = makeStyles({
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
             
    table: {
      marginTop:150,
      maxWidth: 1000,
      border:"4px solid #80A5EE",
    },
    app:{
        backgroundColor:"#F1757A"
    },
    title2:{
       // marginLeft:10,
        margin:'auto',
        textAlign:'center',
    },
    button:{
      textAlign:'center',
      margin:"100px",
      backgroundColor:"#F1757A",
      color:"white",
      width:100,
      border:"4px solid #F1757A",
  },

    inst_2:{
      fontSize:"16px",
    }
  });

//   const rows = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'];
  
export default function Guide(){
    const history = useHistory();
    const classes = useStyles();

    const getTest = async(e) => {
      try {
            
        await axios.get(`http://localhost:4000/guide/xlsx`,{responseType: 'arraybuffer'}).then((response) => {
            console.log(response)
            const newBlob = new Blob([response.data], {type: "application/xlsx"});
            //const dataUrl = window.URL.createObjectURL(newBlob);
            let url = window.URL.createObjectURL(newBlob);
            let a = document.createElement('a');
             a.href = url;
             a.download = `paper.xlsx`
             a.click();
             Swal.fire({
              position: 'top-center',
              icon: 'success',
              title:'done',
              text: 'Paper Template downloaded successfully',
              showConfirmButton: false,
              timer: 1500
              })
        })
        .catch((e)=>{
          if(e.response.status===401 || e.response.status===403)
          {
            history.push('/');
            return null;
          }  
        })

    } catch (err) {
        console.error(err.message);
    }
    }

    const getList = async(e)=>{
      try {
            
        await axios.get(`http://localhost:4000/guide/csv`,{responseType: 'arraybuffer'}).then((response) => {
            console.log(response)
            const newBlob = new Blob([response.data], {type: "application/csv"});
            //const dataUrl = window.URL.createObjectURL(newBlob);
            let url = window.URL.createObjectURL(newBlob);
            let a = document.createElement('a');
             a.href = url;
             a.download = `student_list.csv`
             a.click();
             Swal.fire({
              position: 'top-center',
              icon: 'success',
              title:'done',
              text: 'Student list Template downloaded successfully',
              showConfirmButton: false,
              timer: 1500
              })
        }).catch((e)=>{
            if(e.response.status===401 || e.response.status===403)
            {
              history.push('/');
              return null;
            }  
          })  
    } catch (err) {
        console.error(err.message)
    }

    }

    const Back = async(e)=>{
      history.push('/main');
    }
   
    return(
        <React.Fragment>
          <AppBar className={classes.app}>
            <Toolbar>
              <Typography variant="h4" className={classes.title2} align="center">Guidelines</Typography>  
            </Toolbar>
        </AppBar>
        <Table className={classes.table} align="center">
          <TableHead>
          <TableRow>
            <TableCell className={classes.head} align="center" colSpan={0}>General Instructions to follow while creating a paper</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
             <TableCell className={classes.inst_2}>You are required to submit a form which is availbe at create_test section</TableCell> 
          </TableRow>
          <TableRow>
             <TableCell className={classes.inst_2}>You can create 2 kind of question paper practice question paper and exam, choose option according to that</TableCell> 
          </TableRow>
          <TableRow>
             <TableCell className={classes.inst_2}>In that form you have to fill out necccessary information such as your name , college name ,subject , marks of the paper</TableCell>
          </TableRow>       
          <TableRow>
             <TableCell className={classes.inst_2}>If you are creating paper for examination purpose then fill out start and end date with timing in the form</TableCell>
          </TableRow>       
          <TableRow>
             <TableCell className={classes.inst_2}>For uploading question paper you have two options: upload as pdf / upload as xls</TableCell>
          </TableRow>       
          <TableRow>
             <TableCell className={classes.inst_2}>If you are uploading as pdf , make sure that you have added question and answers as well as marks per question </TableCell>
          </TableRow>       
          <TableRow>
             <TableCell className={classes.inst_2}>If you are uploading as xls , here is the template that you should follow : <button onClick={getTest} class="fa fa-download"></button></TableCell>
          </TableRow> 
          <TableRow>
             <TableCell className={classes.inst_2}>There will be two types of paper: public (which is accessible by every user) and private (visible only to the particuler students)
             </TableCell>
          </TableRow>        
          <TableRow>
             <TableCell className={classes.inst_2}>If you wish to make paper private upload student list as follows : <button onClick={getList} class="fa fa-download"></button></TableCell>
          </TableRow> 
         
        </TableBody>
      </Table>
      <Button className={classes.button} onClick={Back}>Back</Button>
      </React.Fragment>
    );
}

