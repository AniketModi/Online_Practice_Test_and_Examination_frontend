import './App.css';
import Login from './login';
import Signup from './Signup';
import Main from './Main';
import React from 'react';
import {BrowserRouter , Route , Link , NavLink , Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/UP" component={Signup} exact={true}/>
            <Route path="/main" component={Main} exact={true}/>
        </Switch>    
      </BrowserRouter>
    </div>
  );
}

export default App;
