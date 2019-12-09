import { Divider } from '@material-ui/core';
import UserIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
    }
}))

function Tweet() {
    const tweetStyle = {
        border: '1px solid black',
        margin: '10px',
        width: '50%'
    }
    const classes = useStyles()

    return (
        <div className={classes.paper} >
            <div style={tweetStyle}>
                <span>
                <UserIcon color="disabled" style={{ fontSize: 50 }} />
                </span>
                <span>
                    박동현
                </span>
                <span>
                    pdh2263
                </span>
            </div>
            <Divider />
        </div>
    );
}

export default Tweet;