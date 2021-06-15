import React , { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Profile_Page.css';

const useStyle = makeStyles(
    {
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
            height:'749px',
        }
    }
);


const Profile_Page = () => {
    const classes = useStyle();
    const [name,setName] = useState('Jay');
    const [email,setEmail] = useState('201801133@daiict.ac.in');
    const [ist,setIst] = useState('DAIICT');
    const [gender,setGender] = useState('Male');
    const [phn,setPhn] = useState('1234567890');
    const [lin,setLin] = useState('Linkedin');

    return ( 
        <Grid container spacing={2} >
            <Grid item md={6}>
                <div className="Left">
                    <h1 className="head1">Profile</h1>
                    <div className="content">
                        <Typography  className={classes.TpyographyStyle}> Name : {name}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Email : {email}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Institute : {ist}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Gender : {gender}</Typography>
                        <Typography  className={classes.TpyographyStyle}> Number : {phn}</Typography>
                    </div>
                    <Button variant="contained" color="secondary" href="#" size='large'>
                        Update
                    </Button>
                </div>
            </Grid>
            <Grid item md={6} className={classes.root}>
                <div className="Right">
                    <h2>About Me:</h2>
                    <div className="div-typo">
                        <Typography className={classes.TpyographyStyle1}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam officiis deleniti pariatur, consequuntur, dolore ipsum maxime iure consectetur error veritatis, aspernatur numquam laboriosam vero? Ab officia distinctio quia sequi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat numquam voluptas et quidem sequi obcaecati saepe quos nisi eaque eos ratione incidunt error officia nulla, velit aliquam recusandae quis?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod illum tempora quas, molestias amet doloribus nesciunt sequi, nostrum fugit accusantium libero? Laborum reprehenderit reiciendis molestiae nostrum praesentium iste minus! Magni!
                        </Typography>
                    </div>
                    <Typography  className={classes.TpyographyStyle}> Linkedin : {lin}</Typography>
                </div>
            </Grid>
        </Grid>
     );
}
 
export default Profile_Page;