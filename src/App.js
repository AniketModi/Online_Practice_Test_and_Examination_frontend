import './App.css';
import Login from './login';
import Signup from './Signup';
import Home from './Home';
import Profile_Page from './Profile_Page';
import Profileform from './Profile_form';
import React from 'react';
import Paper from './paper';
import Logout from './logout';
import CreatTest from './Test_form';
import Guide from './Guide'

import {BrowserRouter , Route , Link , NavLink , Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/UP" component={Signup} exact={true}/>
            <Route path="/main" component={Home} exact={true}/>
            <Route path="/paper/:id" component={Paper} exact={true}/>
            <Route path="/profilepage" component={Profile_Page} exact={true}/>
            <Route path="/profileform" component={Profileform} exact={true}/>
            <Route path="/logout" component={Logout} exact={true}/>
            <Route path="/creattest" component={CreatTest} exact={true}/>
            <Route path="/template" component={Guide} exact={true}/>
        </Switch>    
      </BrowserRouter>
    </div>
  );
}

export default App;
