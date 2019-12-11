import Divider from '@material-ui/core/Divider/Divider'
import React from 'react'
import AddTweet from '../tweet/AddTweet'
import TweetListContainer from '../tweet/TweetListContainer'

function Home() {
    const style = {
        fontSize: '20px',
        fontWeight: 'bold'
    }
    return (
        <div>
            <p style={style}>홈</p>
            <Divider />
            <AddTweet />
            <div>
                <TweetListContainer />
            </div>
        </div>
    );
}

export default Home;