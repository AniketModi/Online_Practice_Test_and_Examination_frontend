import React ,{useState,useEffect}  from 'react';
import {useHistory} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Exam from './exam';
import Favourite from './favourite';
import Practice from './practice';
import { ControlCameraOutlined } from '@material-ui/icons';
//import Paper from './paper.js';
const axios=require('axios');
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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mainDiv:{
  margin:"10px",
  },
  text:{
    color:'#f73378',
  },
}));

export default function PrimarySearchAppBar() {
  const history=useHistory();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    history.push("/profilepage");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenulogout=()=>{
    history.push('/logout');
    setAnchorEl(null);
    handleMobileMenuClose(); 
  }
  const handleSearch = (e)=>{
    console.log(e.target.value);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenulogout}>Logout</MenuItem>
    </Menu>
  );

  const [title,setTitle] = useState("End-sem");
  const [course,setCourse] = useState("OS");
  const [ist,setIst] = useState("DAIICT");
    const [data,setData] = useState([]);
    const [datawish,setDatawish] = useState([]);
    const email = localStorage.getItem("UserID");

//    const axios = require('axios');

    useEffect(() => {
      prac1();
      wish1();
    }, [])

    async function prac1(){
      await axios
      .get(`${process.env.REACT_APP_URL}/home/practice`)
      .then((e)=>{
        console.log("prac");
        setData(e.data);
      })
      .catch((e)=>{
        if(e.response.status===401 || e.response.status===403)
        {
          history.push('/');
          return null;
        }
      })
    }
    async function wish1(){
      await axios
      .get(`${process.env.REACT_APP_URL}/home/wishlist`)
      .then((e)=>{
        console.log("wishlist");
        setDatawish(e.data);
      })
      .catch((e)=>{
        if(e.response.status===401 || e.response.status===403)
        {
          history.push('/');
          return null;
        }
        console.log(e);
      })
    }

    async function wishlist({id}){
      await axios
      .post(`${process.env.REACT_APP_URL}/home/wishlist`,{
         // email:email,
          id:id,
      })
      .then((e)=>{
          console.log("added");
      })
      .catch((e)=>{
        if(e.response.status===401 || e.response.status===403)
        {
          history.push('/');
          return null;
        }
        console.log(e);
      })
      wish1();
  }

  async function ondelete({id,email})
  {
    await axios
    .delete(`${process.env.REACT_APP_URL}/home/wishlist`,{
      data: {
       // email:email,
        id:id,
      }
    })
    .then((e)=>{
      console.log("deleted");
    })
    .catch((e)=>{
      if(e.response.status===401 || e.response.status===403)
      {
        history.push('/');
        return null;
      }
      console.log(e);
    })
    wish1();
  }

  async function onclick1({id}){
    await history.push(`/paper/${id}`);
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Welcome
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <div className={classes.mainDiv}>
        <div >
          <h1 className={classes.text}>Exams</h1>
          <Exam title={title} course={course} ist={ist}/>
        </div>
        <div>
          <h1 className={classes.text}>My favourites</h1>
          {datawish.length>0?
          datawish.map((e)=>{
            return <Favourite title={e.Title} course={e.Course_name} ist={e.College_name} id={e.Que_paper_id} email={email} ondelete={ondelete} index={e.id} />
          })
          :
          "No Wish List"}
        </div>
        <div>
          <h1 className={classes.text}>Practice Paper</h1>
          {data.length>0?
          data.map((e)=>{
            return <Practice title={e.title} course={e.course} ist={e.college} id={e.id} email={email} onclick={wishlist} onclick1={onclick1} key={e.id}/>
          })
          :
          "No Practice Paper"}
        </div>
      </div>
    </div>
  );
}