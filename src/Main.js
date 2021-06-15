import React , {useEffect} from 'react';
import axios from 'axios';

const Main = () => {
    const axios = require('axios');
    const data = localStorage.getItem("UserID");
    // localStorage.getItem('accessToken');

    useEffect(() => {
       console.log(data); 
    }, [])

    return ( 
        <div>
            Jay    
        </div>
     );
}
 
export default Main;