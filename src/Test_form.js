import React, {Fragment, useState} from "react";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Test_form.css';
import {useHistory} from 'react-router-dom';
import { Typography } from "@material-ui/core";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useStyles = makeStyles((theme) => ({
    
}));

const Testform =()=>{

    const [title,setTitle] = useState("")
    const [college_name,setCollege_name]=useState("");
    const [course_name,setCourse_name]=useState("");
    const [prof_name,setProf_name]=useState("");
    const [type,setType]=useState("");
    const [option,setOp]=useState("");
    const [start_date,setStart_date]=useState("");
    const [end_date,setEnd_date]=useState("");
    const [marks,setMarks]=useState();
    const [questions,setQuestions]=useState(null);
    const [student,setStudent]=useState(null);  

    const handleSubmit = async(e)=>{
      e.preventDefault();
        if(title.length!==0 && college_name.length!==0 && course_name.length!==0 && prof_name.length!==0  && type.length!==0 && questions!=null && option.length!==0){
               dataHandle();  
        }
        else{
            Swal.fire({
              position: 'top-center',
              icon: 'error',
              title: 'Fill The form',
              text:"Enter Required data",
              timer: 1500
          })
        }
    }

    const dataHandle = async() => {
        try {       
                const body = [title,college_name,course_name,prof_name,type,start_date,end_date,marks];
                console.log(body);
                const head = {headers:  {"Content-Type": "application/json"}};
                if(option==="PDF"){
                    const res1 = await axios.post(`${process.env.REACT_APP_URL}/create_test`, JSON.stringify(body),head)
                    console.log("response");
                    console.log(res1.data);  
                    if(res1.data.length!==0){
                      uploadPaper_submit(res1.data);
                     }else{
                    console.log("not going")
                    }
                }  
                else{
                  const res2 = await axios.post(`${process.env.REACT_APP_URL}/create_test/own`, JSON.stringify(body),head)
                    console.log("response");
                    console.log(res2.data);  
                    if(res2.data.length!==0){
                      upload_xlpaper(res2.data);
                     }else{
                    console.log("not going")
                    }
                }          
            } catch (error) {
                  console.log(error)
                }
            };


    const uploadPaper_submit = async(paper_id)=>{
        try {
                const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                let fd = new FormData();
                fd.append('file',questions)
                const res =await axios.post(`${process.env.REACT_APP_URL}/create_test/paper/${paper_id}`, fd, config)
                console.log("res");
                console.log(res);
                uploadList_submit(paper_id);
        } catch (error) {
            console.log(error);
        }
    }
    const upload_xlpaper = async(paper_id)=>{
      try {
              const config = { headers: { 'Content-Type': 'multipart/form-data' } };
              let fd = new FormData();
              fd.append('file',questions)
              const res =await axios.post(`${process.env.REACT_APP_URL}/create_test/paper_xl/${paper_id}`, fd, config)
              console.log("res");
              console.log(res);
              uploadList_submit(paper_id);
      } catch (error) {
          console.log(error);
      }
  }

    const uploadList_submit =async (paper_id)=>{
        try {
              if(student!==null){
                  console.log(student);
                  const config2 = { headers: { 'Content-Type': 'multipart/form-data' } };
                  let fd2 = new FormData();
                  fd2.append('file',student)
                  const res2 =await axios.post(`${process.env.REACT_APP_URL}/create_test/list/${paper_id}`, fd2, config2)
                  console.log("res");
                  console.log(res2);
              }
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title:'Yay',
                text: 'Form Submitted Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleOption = (event)=>{
      setOp(event.target.value)
    }
    const classes = useStyles();
    const token=localStorage.getItem("accessToken");
    const history=useHistory();

    if(!token)
    {
      history.push('/');
      return null;
    }
      return (
          <Fragment>
              <h1 class="head_2">Create Test</h1>
              <form className={classes.form} >
              <div class="ip_2">
              <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="title"
                  label="Enter Title of the paper"
                  name="title"
                  autoFocus
                  onChange={e=>setTitle(e.target.value)}
                />
                </div>
                <div class="ip_2">
              <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="name"
                  label="Enter Your Name"
                  name="name"
                  autoFocus
                  value={prof_name} onChange={e=>setProf_name(e.target.value)}
                />
                </div>
                <div class="ip_2">
                <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="I_name"
                  label="Enter Institute Name"
                  name="I_name"
                  autoFocus
                  value={college_name} onChange={e=>setCollege_name(e.target.value)}
                />
                </div>
                <div>
                <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  required
                  id="C_name"
                  label="Enter Course Name"
                  name="C_name"
                  autoFocus
                  value={course_name} onChange={e=>setCourse_name(e.target.value)}
                />
                </div>
                <div >
                    <RadioGroup aria-label="Type" name="type2" value={type} onChange={handleChange} row={true}>
                        <FormControlLabel class="radio_2" value="Exam" control={<Radio />} label="Exam" />
                        <FormControlLabel class="radio_2" value="Practice" control={<Radio />} label="Practice" />
                    </RadioGroup>
                </div>
                <div>
                <TextField type="input"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  id="marks"
                  label="Enter Marks"
                  name="marks"
                  autoFocus

                  value={marks} onChange={e=>setMarks(e.target.value)}
                />
                </div>
                <div>
                <TextField type="datetime-local"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  id="s_date"
                  name="s_date"
                  autoFocus
                  value={start_date} onChange={e=>setStart_date(e.target.value)} 
                />
                </div>
                <div>
                <TextField type="datetime-local"
                  variant="outlined"
                  margin="normal"
                  style ={{width: '50%'}}
                  id="e_date"
                  name="e_date"
                  autoFocus
                  value={end_date} onChange={e=>setEnd_date(e.target.value)}
                />
                </div>
                <div >
                  <Typography>Select format of the Question paper:pdf/Excel</Typography>
                    <RadioGroup aria-label="Type" name="opt2" value={option} onChange={handleOption} row={true}>
                        <FormControlLabel class="radio_2" value="PDF" control={<Radio />} label="PDF" />
                        <FormControlLabel class="radio_2" value="EXCEL" control={<Radio />} label="Excel" />
                    </RadioGroup>
                </div>
              <div>
              <TextField type="file"
                  variant="outlined"
                  margin="normal"
                  id="paper"
                  style ={{width: '50%'}}
                  name="paper"
                  autoFocus
                  onChange= {e=>setQuestions(e.target.files[0])}
                /> 
                </div>
                {/* <div>
                <Button
                  type="submit"
                  variant="contained"
                  margin="normal"
                  color="primary"
                  style ={{width: '25%'}}
                  className={classes.submit}
                  onClick={uploadPaper_submit} >
                  Upload
                  </Button>
              </div> */}
              <div>
              <TextField type="file"
                  variant="outlined"
                  margin="normal"
                  id="paper"
                  style ={{width: '50%'}}
                  name="paper"
                  autoFocus
                  onChange = {e=>setStudent(e.target.files[0])}
                /> 
                </div>
                <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style ={{width: '25%'}}
                  className={classes.submit}
                  onClick={handleSubmit} >
                  Submit
                  </Button>
                </div>
                </form>
                {/* <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style ={{width: '25%'}}
                  className={classes.submit}
                  onClick={uploadList_submit} >
                  Upload
                  </Button>
              </div> */}
              
          </Fragment>
      );
}

export default Testform;

