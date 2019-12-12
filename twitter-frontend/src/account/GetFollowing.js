import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'


function GetFollowing() {

  const token = localStorage.token
  const getFollowing = async () => {
    axios.get("http://localhost:8080/api/profiles/following", {
      headers:
      {
        Authorization: 'Bearer ' + token
      }
    }).then(
      function(response){
        console.log(response)
      }
    )
  }

  return (
    <div>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={getFollowing}
      >
        FOLLOWING
      </Button>
    </div>
  )
}

export default GetFollowing