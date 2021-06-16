import React, {Fragment, useState ,useEffect}  from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Test_form.css';


const Profile_form = ()=>{

    const [number,setNumber]=useState("");
    const [gender,setGender]=useState("");
    const [name,setName]=useState("");
    const [lin,setLin]=useState("");
    const [me,setMe]=useState("");
    const axios = require('axios');
    const data = localStorage.getItem("UserID");
    const history = useHistory();

    const handleSubmit =async e => {
        e.preventDefault();
        await axios
        .put('http://localhost:4000/profile',{
            email:data,
            name:name,
            contact:number,
            Gender:gender,
            LinkedinProfile:lin,
            About:me,
        })
        .then((e)=>{
            console.log(e);
        })
        .catch((e)=>{
            console.log(e);
        })
        history.push('/profilepage');
      };

      useEffect(() => {
        axios 
        .get(`http://localhost:4000/profile/${data}`)
        .then((e)=>{
            console.log(e);
            setName(e.data.name);
            setGender(e.data.Gender);
            setLin(e.data.LinkedinProfile);
            setMe(e.data.About);
            setNumber(e.data.contact);
        })
    }, [])


    return (
        <React.Fragment>
            <h1 class="heading">Update Profile Page</h1>
            <div class="container">
                <form class="form-horizontal">
                    
                    <div class="form-group">
                        <label class="control-label col-sm-2 label_s">Name:</label>
                        <div class="col-sm-10">
                            <input type="text" required value={name}  lable={name} onChange={e=>setName(e.target.value)} class="form-control"  placeholder="Enter Your name" />
                        </div>
                     </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2 label_s">Number:</label>
                        <div class="col-sm-10">
                            <input type="text" required value={number} lable={number} onChange={e=>setNumber(e.target.value)} class="form-control"  placeholder="Enter Number" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2 label_s">Gender:</label>
                        <div class="col-sm-10">
                            <input type="text" required value={gender} lable={gender} onChange={e=>setGender(e.target.value)} class="form-control"  placeholder="Male/Female"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2 label_s">About me:</label>
                        <div class="col-sm-10">
                            <input type="text" value={me} placeholder ="About me" lable={me} onChange={e=>setMe(e.target.value)} class="form-control "  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2 label_s">Linkedin ID:</label>
                        <div class="col-sm-10">
                            <input type="text" value={lin} placeholder ="LinkedIN" lable={lin} onChange={e=>setLin(e.target.value)} class="form-control "  />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-5 col-sm-4 ">
                            <button type="submit" class="btn btn-primary col-sm-6 button_s" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>     
                </form>
               </div>
              
        </React.Fragment>
    );
}

export default Profile_form;

