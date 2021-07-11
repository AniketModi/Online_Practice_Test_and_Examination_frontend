import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React , {Fragment,useState} from 'react'
import { useHistory } from "react-router-dom";
import './Admin.css';
import Swal from 'sweetalert2'



const Admin = () => {

    const history = useHistory();
    const [passcode,setPasscode] = useState("");

    const head = {
        headers:  {"Content-Type": "application/json"}};

    const handlePassword = async(e)=>{
            if(passcode.length!==0){
            const res =await  axios.post(`${process.env.REACT_APP_URL}/admin`,JSON.stringify([passcode]),head);
            console.log(res.data);
            if(res.data==="YES"){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title:'Yay',
                    text: 'Login SuccessfUll',
                    showConfirmButton: false,
                    timer: 1500
                })
                history.push('/admin/main');
            }
            else{ 
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'OOps',
                    text:"password incorrect",
                    timer: 1500
                })
                history.push('/admin');
            }
        }
        else{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'OOps',
                text:"Enter Password",
                timer: 1500
            })
        }

    }

    return (
        <Fragment>
            
            <h1 class="heading_2">Admin Panel</h1>
            <div> 
            <TextField className="input"
                variant="outlined"
                margin="normal"
                required
                style={{width:'50%'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange = {e=>setPasscode(e.target.value)}/>
            </div>
            <div class="set_2">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style ={{width: '50%'}}
                onClick={handlePassword} >
                Submit
                </Button>
              </div>
        </Fragment>
    )
}

export default Admin
