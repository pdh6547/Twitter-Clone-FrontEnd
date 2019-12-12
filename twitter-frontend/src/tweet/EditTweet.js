import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getTweets } from './tweets';
import { tweetRedirect } from '../modules/redirect'


function EditTweet(tweet) {
  const [edit, setEdit] = useState({ content: tweet.tweet.content })
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  const onChange = (e) => {
    setEdit({ content: e.target.value })
  }

  const editTweet = async () => {
    const token = localStorage.token
    axios.put("http://localhost:8080/api/tweets/" + tweet.tweet.id, edit, {
      headers:
      {
        Authorization: 'Bearer ' + token
      }
    }).then(
      setOpen(false),
      setTimeout(
        function () {
          dispatch(getTweets())
        }, 1000
      ),
      dispatch(tweetRedirect())
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
        onClick={openDialog}
      >
        EDIT
      </Button>
      <Dialog open={open} onClose={closeDialog} aria-labelledby="form-dialog-title" maxWidth='md' fullWidth={true}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="content"
            label="Content"
            fullWidth
            defaultValue={edit.content}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={editTweet} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditTweet