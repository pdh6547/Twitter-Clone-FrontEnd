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
import LockIcon from '@material-ui/icons/Lock';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_HOME, PATH_PROFILE, PATH_EXPLORE } from '../constants/routes';

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
        marginTop: '50px',
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
        localStorage.removeItem('token')
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <Link to={PATH_HOME} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button key='홈'>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='홈' />
                    </ListItem>
                </Link>
                <Link to={PATH_PROFILE} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button key='프로필'>
                        <ListItemIcon><UserIcon /></ListItemIcon>
                        <ListItemText primary='프로필' />
                    </ListItem>
                </Link>
                <Link to={PATH_EXPLORE} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button key='탐색하기'>
                        <ListItemIcon><SearchIcon /></ListItemIcon>
                        <ListItemText primary='탐색하기' />
                    </ListItem>
                </Link>
                <Link to="/signin" onClick={logoutClick} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button key='로그아웃'>
                        <ListItemIcon><LockIcon /></ListItemIcon>
                        <ListItemText primary='로그아웃' />
                    </ListItem>
                </Link>
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