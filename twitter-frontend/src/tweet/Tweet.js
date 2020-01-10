import Divider from '@material-ui/core/Divider/';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import UserIcon from '@material-ui/icons/AccountCircle';
import ReplyIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import React from 'react';
import DeleteTweet from './DeleteTweet';
import EditTweet from './EditTweet';
import LikeTweet from './LikeTweet';

function Tweet({ tweet }) {

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

    const style = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '10px'
    }
    const iconStyle = {
        float: 'left',
        width: '67px',
    }
    const classes = useStyles()
    return (
        <div>
            <p style={style}>트윗</p>
            <Divider />
            <div className={classes.root}>
                <Paper className={classes.paper} key={tweet.id} >
                    <div style={iconStyle}>
                        <UserIcon color="disabled" style={{ fontSize: 50 }} />
                    </div>
                    <div >
                        <Typography component="h3">
                            {tweet.authorEmail}
                        </Typography>
                        <Typography component="p" >
                            {tweet.content}
                        </Typography>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <>
                            <LikeTweet id={tweet.id} />
                            {
                                tweet.countLike !== 0 ? <span style={{ marginLeft: '5px', float: 'left' }}>{tweet.countLike}</span> : ''
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
            </div>
        </div>
    );
};

export default Tweet;