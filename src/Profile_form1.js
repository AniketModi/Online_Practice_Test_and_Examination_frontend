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
import axios from 'axios';



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
  
  const axios = require("axios");

  const classes = useStyles();
  const history = useHistory();

  const [email,setEmail] = React.useState();
  const [pass,setPass] = React.useState();
  const [name,setName] = React.useState();
  const [istName,setIstName] = React.useState();
  const [state, setState] = React.useState(true);
  const [state1, setState1] = React.useState(false);
  //const [state2, setState2] = React.useState(false);
  const [passcode, setPasscode] = React.useState(0);
  const [temp, setTemp] = React.useState(0);


  const handleChange = (e) => {
    if (e.target.name === "state") {
      setState(!state);
      setState1(state);
    } else if (e.target.name === "state1") {
      setState(state1);
      setState1(!state1);
    }
  };

  const check = async (e)=>{
    const check1 = await axios
    .post( 'http://localhost:4000/sendEmail/email',{
      email:email,
    })
    .then((e)=>{
      console.log(e);
      setPasscode(e.data);
      //console.log(e.data);
    })
    .catch((err)=>{
      console.log(err,"Jay");
    })
  }

  const onclick1 = () =>{
    check();
  }

  const onclick = () =>{
    const num = Number(temp);
      if(passcode!==num)
      {
        alert("Incorrect Code");
      } 
      else
      {
        axios
        .post('http://localhost:4000/SignUp',{
          name:name,
          email:email,
          password:pass,
          institute:istName,
          role:state===true?"Student":"Professor",
        })
        .then((e)=>{
          console.log(e);
        })
        .catch((err)=>{
          console.log(err,"Jay");
        })
        history.push('/');
      }
  }


  return (
    <Grid container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
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
              <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="name"
                id="name"
                autoComplete="current-password"
                onChange={(e)=>{setName(e.target.value);}}
              />
              <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="ist"
                label="Institute Name"
                type="istName"
                id="istName"
                autoComplete="current-password"
                onChange={(e)=>{setIstName(e.target.value);}}
              />
              <FormControlLabel
            control={
              <Checkbox checked={state} onChange={handleChange} name="state" size="medium"/>
            }
            label="Student"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state1}
                onChange={handleChange}
                name="state1"
                size="medium"
              />
            }
            label="Professor"
          />
          <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passcode"
                label="Enter Pass Code"
                type="passcode"
                id="passcode"
                autoComplete="current-password"
                disabled={passcode===0}
                onChange={(e)=>{
                  setTemp(e.target.value);
                }}
              />
              <Button
                
                variant="contained"
                color="secondary"
                className
                onClick={onclick1}
              >
                Get Code                
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onclick}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <NavLink to="/" variant="body2">
                    {"Already Have an account? Sign In"}
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>  
    </Grid>
  );
}