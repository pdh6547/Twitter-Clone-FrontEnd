import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Explore from './pages/Explore';
import SignInContainer from './account/SignInContainer';
import Toolbar from './components/Toolbar';
import { PATH_SIGNIN, PATH_SIGNUP, PATH_HOME, PATH_PROFILE, PATH_EXPLORE, PATH_TWEET } from './constants/routes';
import TweetContainer from './tweet/TweetContainer';

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
                <Route exact path={PATH_HOME} component={Home} />
                <Route path={PATH_PROFILE} component={Profile} />
                <Route path={PATH_EXPLORE} component={Explore} />
                <Route path={PATH_TWEET} component={TweetContainer} />
            </div>
        </div>
    );

    const LoginContainer = () => (
        <div>
            <Route path={PATH_SIGNIN} component={SignInContainer} />
            <Route path={PATH_SIGNUP} component={SignUp} />
        </div>
    );

    return (
        <div>
            {
                (function () {
                    if (window.location.href === 'http://localhost:3000/signup') return <Route exact path={PATH_SIGNUP} component={LoginContainer} />
                    else if (!localStorage.token) return <Redirect to={PATH_SIGNIN} />
                })()
            }
            <Switch>
                <Route exact path={PATH_SIGNIN} component={LoginContainer} />
                <Route path="/main" component={MainContainer} />
            </Switch>
        </div>
    );
}

export default App;
