import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UserIcon from '@material-ui/icons/AccountCircle';
import DeleteTweet from './DeleteTweet'
import EditTweet from './EditTweet'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
        margin: '10px',
        width: '70%',
        verticalAlign: 'center'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function TweetList({ tweets }) {
    const classes = useStyles()
    const iconStyle = {
        float: 'left',
        width: '67px',
        // marginTop: '20px'
    }
    const contentStyle = {
        float: 'left',

    }
    const buttonStyle = {
        float: 'right',
        width: '100px',
        textAlign: 'center'
    }
    return (
        <div className={classes.root}>
            {tweets.map(tweet => (
                <Paper className={classes.paper} key={tweet.id} >
                    <div style={iconStyle}>
                        <UserIcon color="disabled" style={{ fontSize: 50 }} />
                    </div>
                    <div style={contentStyle}>
                        <Typography component="h3">
                            {tweet.authorEmail}
                        </Typography>
                        <Typography component="p">
                            {tweet.content}
                        </Typography>
                    </div>
                    <div style={buttonStyle}>
                        {localStorage.email === tweet.authorEmail ?
                            <div>
                                <EditTweet
                                    tweet={tweet}
                                />
                                <DeleteTweet
                                    id={tweet.id}
                                />
                            </div> : ''}
                    </div>
                </Paper>
            ))}
        </div>
    )
}

export default TweetList
