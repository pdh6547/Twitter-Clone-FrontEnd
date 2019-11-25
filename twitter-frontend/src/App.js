import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import { styles as toolbarStyles } from './Components/Toolbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const drawerWidth = 200;
const smallDrawerWidth = 80;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: smallDrawerWidth,
      flexShrink: 0,
    }
  },
  placeholer: toolbarStyles(theme).root,
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  smallDrawerPaper: {
    width: smallDrawerWidth,
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
  },
}));

function App(props) {
  const classes = useStyles();

  const smallDrawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='Home'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/profile"style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='Profile'>
            <ListItemIcon><UserIcon /></ListItemIcon>
          </ListItem>
        </Link>
      </List>
    </div>
  );
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='홈'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='홈' />
          </ListItem>
        </Link>
        <Link to="/profile"style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='프로필'>
            <ListItemIcon><UserIcon /></ListItemIcon>
            <ListItemText primary='프로필' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <div className={classes.placeholder} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden sm implementation="css">
        <Drawer
            classes={{
              paper: classes.smallDrawerPaper,
            }}
            variant="permanent"
            open
          >
            {smallDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </main>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default App;
