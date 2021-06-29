import React, {Fragment, useState , useEffect} from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import './Profile_form.css'

const useStyles = makeStyles((theme) => ({
    
}));

const Testform = ()=>{
    const axios = require("axios");

    const [number,setNumber] = useState("")
    const [me,setMe]=useState("");
    const [name,setname]=useState("");
    const [type,setType]=useState("");
    const [lin,setlin]=useState();
    const email = localStorage.getItem('UserID');
    const history=useHistory();

    useEffect( (e)=>{
        async function func(){
            await axios
        .get(`http://localhost:4000/profile/${email}`)
        .then((e)=>{
            setname(e.data.name);
            setNumber(e.data.contact);
            setMe(e.data.About);
            setlin(e.data.LinkedinProfile);
            setType(e.data.Gender);
            console.log(e,e.data.contact);
            
        })
    }

    func();
    }
    ,[]);

    const handleSubmit =async e => {
        e.preventDefault();
        async function func() {
            await axios
            .put(`http://localhost:4000/profile`,{
                email:email,
                name:name,
                Gender:type,
                contact:number,
                LinkedinProfile:lin,
                About:me
            })
            .then((e)=>{
                console.log(e);
                history.push('/profilepage');
            })
            .catch((e)=>{
                console.log(e);
            });
    }
        func();
        
    };


    const classes = useStyles();
    return (
        <Fragment>
             <h1 class="head_2">Update Profile</h1>
             <form className={classes.form} >
                <div class="ip_2">
                <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="name"
                    name="name"
                    autoFocus
                    label="Enter Name"
                    value={name}
                    onChange={e=>setname(e.target.value)}
                ></TextField>
                </div>
                <div class="ip_2">
                <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="title"
                    name="title"
                    autoFocus
                    label="Contact Number"
                    value={number}
                    onChange={e=>setNumber(e.target.value)}
                />
                </div>
                <div class="ip_2">
                <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="C_name"
                    name="C_name"
                    label="About me"
                    value={me}
                    autoFocus
                     onChange={e=>setMe(e.target.value)}
                />
                </div>
                <div>
                <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    required
                    id="type"
                    name="type"
                    autoFocus
                    value={type}
                    label="Gender" 
                    onChange={e=>setType(e.target.value)}
                />
                </div>
                <div>
                <TextField type="input"
                    variant="outlined"
                    margin="normal"
                    style ={{width: '50%'}}
                    id="marks"
                    name="marks"
                    autoFocus
                    value={lin} 
                    label="Linked IN"
                    onChange={e=>setlin(e.target.value)}
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
        </Fragment>
    );
}

export default Testform;