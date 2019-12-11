import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignInContainer from './signIn/SignInContainer'
import Toolbar from './components/Toolbar'

const drawerWidth = 200;

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
      <Route path="/signin" component={SignInContainer} />
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
