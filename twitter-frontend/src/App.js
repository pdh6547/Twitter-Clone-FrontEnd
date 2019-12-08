import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn'
import Toolbar from './Components/Toolbar'

const drawerWidth = 200;
const smallDrawerWidth = 80;

function App() {
  const style = {
    marginLeft: drawerWidth + 10,
    width: '70%'
  }
  const MainContainer = () => (
    <div>
      <Toolbar />
      <div style={style} >
        <Route path="/main/home" component={Home} />
        <Route path="/main/profile" component={Profile} />
      </div>
    </div>
  )

  const LoginContainer = () => (
    <div>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  )

  return (
    <div>
      <Route exact path="/signin" component={LoginContainer} />
      <Route exact path="/signup" component={LoginContainer} />
      <Route path="/main" component={MainContainer} />
    </div>
  );
}

export default App;
