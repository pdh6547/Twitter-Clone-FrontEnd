import React from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getTweets } from './tweets'
import { deleteTweetRedirect } from '../modules/redirect'

function DeleteTweet(tweet) {
  const dispatch = useDispatch()
  const token = localStorage.token
  const deleteTweet = async () => {
    await axios.delete("http://localhost:8080/api/tweets/" + tweet.id, {
      headers:
      {
        Authorization: 'Bearer ' + token
      }
    }).then(
      dispatch(getTweets()),
      dispatch(deleteTweetRedirect())
    )
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