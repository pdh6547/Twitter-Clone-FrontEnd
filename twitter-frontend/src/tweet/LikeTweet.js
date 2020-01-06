import React from 'react';
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { tweetRedirect } from '../modules/redirect'
import { getTweets } from './tweets'

function LikeTweet(tweet) {
    const dispatch = useDispatch();
    const token = localStorage.token;
    const likeTweet = async () => {
        console.log(tweet.id)
        await axios.post("http://localhost:8080/api/tweet/favorites/" + tweet.id, '',
            {
                headers:
                {
                    Authorization: 'Bearer ' + token
                }
            }).then(
                setTimeout(
                    function () {
                        dispatch(getTweets())
                    }, 500
                ),
                dispatch(tweetRedirect())
            ).catch(function (error) {
                axios.delete("http://localhost:8080/api/tweet/favorites/" + error.response.data.id, {
                    headers:
                    {
                        Authorization: 'Bearer ' + token
                    }
                })
            }
            )
    }
    return (
        <>
            <LikeIcon style={{ float: 'left' }} tweet={tweet} onClick={likeTweet} />
        </>
    );
}

export default LikeTweet;