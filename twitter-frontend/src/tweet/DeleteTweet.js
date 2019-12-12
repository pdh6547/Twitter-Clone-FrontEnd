import { Button } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { tweetRedirect } from '../modules/redirect'
import { getTweets } from './tweets'

function DeleteTweet(tweet) {
  const dispatch = useDispatch()
  const token = localStorage.token

  const deleteTweet = async (e) => {
    if (e.keyCode === 13 || e.button === 0) {
      axios.delete("http://localhost:8080/api/tweets/" + tweet.id, {
        headers:
        {
          Authorization: 'Bearer ' + token
        }
      }).then(
        setTimeout(
          function() {
            dispatch(getTweets())
          },500
        ),
        dispatch(tweetRedirect())
      )
    }
  }


  return (
    <div>
      <Button
        style={{ margin: '5px' }}
        type="button"
        variant="contained"
        color="primary"
        tweet={tweet}
        onClick={deleteTweet}
      >
        DELETE
      </Button>
    </div>
  )
}

export default DeleteTweet