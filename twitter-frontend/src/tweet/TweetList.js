import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UserIcon from '@material-ui/icons/AccountCircle';
import DeleteTweet from './DeleteTweet';
import EditTweet from './EditTweet';
import LikeTweet from './LikeTweet';
import ReplyIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

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
        // float: 'left',

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
                    <div style={{ marginTop: '20px' }}>
                        <>
                            <LikeTweet id={tweet.id}/>
                            {
                                tweet.countLike!==0 ? <span style={{ marginLeft: '5px', float: 'left' }}>{tweet.countLike}</span> : ''
                            }
                        </>
                        <ReplyIcon style={{ float: 'left', marginLeft: '10px' }} />
                        {localStorage.email === tweet.authorEmail ?
                            <>
                                <DeleteTweet id={tweet.id} />
                                <EditTweet tweet={tweet} />
                            </> : ''
                        }
                    </div>
                </Paper>
            ))}
        </div>
    )
}

export default TweetList
