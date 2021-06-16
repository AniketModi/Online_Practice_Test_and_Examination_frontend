import React , { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Profile_Page.css';
import Avatar from '@material-ui/core/Avatar';
import "./image.png";

const useStyle = makeStyles((theme)=>({
    
        TpyographyStyle:{
            fontSize:'25px',
            border:'1px solid black',
            marginBottom:'20px',
            borderBottom:'3px solid black',
            padding:'10px',
        },
        TpyographyStyle1:{
            fontSize:'20px',
            height:'300px',
            borderRadius:'15px',
        },
        root:{
            backgroundColor:'#80A5EE',
            height:'743px',
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(6),
            backgroundColor:'#ff4081',
            fontSize:'18px'
        },
}));


const Profile_Page = () => {
    const classes = useStyle();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [ist,setIst] = useState('');
    const [gender,setGender] = useState('');
    const [phn,setPhn] = useState('');
    const [lin,setLin] = useState('');
    const [me,setMe] = useState("");
    const [role,setRole] = useState("");
    const axios = require('axios');
    const data = localStorage.getItem("UserID");

    useEffect(() => {
        axios 
        .get(`http://localhost:4000/profile/${data}`)
        .then((e)=>{
            console.log(e);
            setName(e.data.name);
            setEmail(e.data.email);
            setIst(e.data.Institute);
            setGender(e.data.Gender);
            setLin(e.data.LinkedinProfile);
            setMe(e.data.About);
            setPhn(e.data.contact);
            setRole(e.data.role);
        })
    }, [])

    return ( 
        <Grid container spacing={2} >
            <Grid item md={6}>
                <div className="Left">
                    <h2 className="head1">Profile</h2>
                    <div className="content">
                        <Typography  className={classes.TpyographyStyle}> Name : {name}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Email : {email}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Institute : {ist}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Gender : {gender}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Number : {phn}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Role : {role}</Typography>
                    </div>
                    <Button variant="contained" color="secondary" href="/profileform" size='large' className={classes.large}>
                        Update
                    </Button>
                </div>
            </Grid>
            <Grid item md={6} className={classes.root}>
                <div className="Right">
                    <h2>About Me:</h2>
                    <div className="div-typo">
                        <Typography className={classes.TpyographyStyle1}>
                            {me}
                        </Typography>
                    </div>
                    <Typography  className={classes.TpyographyStyle}> Linkedin : {lin}</Typography>
                </div>
            </Grid>
        </Grid>
     );
}
 
export default Profile_Page;