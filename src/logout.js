import {useHistory} from 'react-router-dom';

export default function Logout(){
    const history=useHistory();

    localStorage.clear();
    history.push('/');

    return null;
}

