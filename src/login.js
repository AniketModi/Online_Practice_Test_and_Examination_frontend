import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import test from './test1.jpeg';
import Paper from '@material-ui/core/Paper';
import {BrowserRouter , Route , Link , NavLink , Switch , useHistory} from 'react-router-dom';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    //backgroundImage: 'url(test.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor:'#f1757a',
    width:'fit-content',
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [email,setEmail] = React.useState();
  const [pass,setPass] = React.useState();
  const [code,setCode] = React.useState(0);

  const axios = require("axios");

  const onclick = async (e) =>{
    e.preventDefault();
    const num = Number(pass);
      // if(passcode!==num)
      // {
      //   alert("Incorrect Code");
      // } 
      // else

        const data = await axios
        .post(`${process.env.REACT_APP_URL}/SignIn`,{
          email:email,
          password:pass,
        })
        .then((e)=>{
          console.log(e);
          //setCode(e.status);
          console.log(e.status);
          if(Number(e.status)===200)
          {
            localStorage.setItem("UserID",email);
            localStorage.setItem('accessToken', e.data.accessToken);
            history.push('/main');
          }
          
        })
        .catch((err)=>{
          console.log(err,"Jay");
          alert('Check EmailId or PassWord');
          window.location.reload();
        })
  }

  return (
    <Grid container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} >
          <img src={test} alt="img"/>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} >
              <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>{setEmail(e.target.value);}}
              />
              <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{setPass(e.target.value);}}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onclick}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="/up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>  
    </Grid>
  );
}