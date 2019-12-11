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
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    marginTop: '50px'
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Toolbar() {
  const classes = useStyles();
  const style = {
    margin: '0 auto',
    width: '70%'
  }

  const logoutClick = () => {
    console.log(localStorage.getItem('token'))
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'))
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Link to="/main/home" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='홈'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='홈' />
          </ListItem>
        </Link>
        <Link to="/main/profile" style={{ textDecoration: 'none', color: 'black' }}>
          <ListItem button key='프로필'>
            <ListItemIcon><UserIcon /></ListItemIcon>
            <ListItemText primary='프로필' />
          </ListItem>
        </Link>
        <div style={{textAlign:'center'}}>
          <Link to="/signin" style={{ textDecoration: 'none', color: 'black' }}>
            <Button
              type='button'
              variant="contained"
              className={classes.button}
              onClick={logoutClick}
            >
              LOGOUT
          </Button>
          </Link>
        </div>
      </List>
    </div>
  );

  return (
    <div className={classes.root} style={style}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css" >
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
    </div>
  );
}

export default Toolbar;