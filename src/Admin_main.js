import React, { Fragment,useEffect, useState } from 'react';
import './Admin_main.css';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Swal from 'sweetalert2';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

const Adminmain = () => {
   const [datas,setDatas] = useState([]);


    const getPDF = async(id) =>{
        try {
            
            await axios.get(`${process.env.REACT_APP_URL}/admin/main/pdf/${id}`,{responseType: 'arraybuffer'}).then((response) => {
                console.log(response)
                const newBlob = new Blob([response.data], {type: "application/pdf"});
                //const dataUrl = window.URL.createObjectURL(newBlob);
                let url = window.URL.createObjectURL(newBlob);
					      let a = document.createElement('a');
					       a.href = url;
					       a.download = `${id}_paper.pdf`;
					       a.click();
                alert("File is successfully downloaded");
            })

        } catch (err) {
            console.error(err.message)
        }
    }

    

   const getAllPaper = async() => {
      try {
          
          const res = await fetch(`${process.env.REACT_APP_URL}/admin/main`)
          const jsonData = await res.json();

          console.log(jsonData)

          setDatas(jsonData)

      } catch (err) {
          console.error(err.message)
      }
  }


  const deletePaper = async(id)=>{
      const paper = await axios.delete(`${process.env.REACT_APP_URL}/admin/main/${id}`)
      if(paper.data==="deleted"){
         Swal.fire({
            position: 'top-center',
            icon: 'success',
            title:'done',
            text: 'Paper Deleted',
            showConfirmButton: false,
            timer: 1500
      })
      window.location.reload(true);
      }
  }

  useEffect(() => {
      getAllPaper();

  }, [])

  const classes = useStyles();

    return (

       <Fragment>
               <h1 class="head_main_2">Admin Panel</h1>
               <Table className={classes.table} aria-label="customized table">
               <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">Course</StyledTableCell>
                        <StyledTableCell align="center">College</StyledTableCell>
                        <StyledTableCell align="center">Professor</StyledTableCell>
                        <StyledTableCell align="center">Start_date</StyledTableCell>
                        <StyledTableCell align="center">End_date</StyledTableCell>
                        <StyledTableCell align="center">Marks</StyledTableCell>
                        <StyledTableCell align="center">Paper</StyledTableCell>
                        {/* <StyledTableCell align="center">Student</StyledTableCell> */}
                        <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {datas.map((data) => (
            <StyledTableRow key={data._id}>
              <StyledTableCell align="center" component="th" scope="row">{data.Title}</StyledTableCell>
              <StyledTableCell align="center">{data.Type}</StyledTableCell>
              <StyledTableCell align="center">{data.Course_name}</StyledTableCell>
              <StyledTableCell align="center">{data.College_name}</StyledTableCell>
              <StyledTableCell align="center">{data.Professor_name}</StyledTableCell>
              <StyledTableCell align="center">{data.Start_date}</StyledTableCell>
              <StyledTableCell align="center">{data.End_date}</StyledTableCell>
              <StyledTableCell align="center">{data.Marks}</StyledTableCell>
              <StyledTableCell align="center"><button onClick={()=>getPDF(data._id)} class="fa fa-download iconss_2"></button></StyledTableCell>
              {/* <StyledTableCell align="center"><button onClick={()=>getList(data._id)} class="fa fa-download iconss_2"></button></StyledTableCell> */}
              <StyledTableCell align="center"><button class="fa fa-trash icons_d_2" onClick={()=>deletePaper(data._id)}></button></StyledTableCell>
            </StyledTableRow>
          ))}
                </TableBody>
                </Table>
       </Fragment>
    )
}

export default Adminmain
