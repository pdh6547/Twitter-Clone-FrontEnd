import React from 'react'
import Divider from '@material-ui/core/Divider/Divider'
import Tweet from '../Components/Tweet'

function Home() {
    const style = {
        fontSize: '20px',
        fontWeight: 'bold'
    }
    return (
        <div>
            <p style={style}>홈</p>
            <Divider />
            <Tweet />
            <Tweet />
        </div>
    );
}

export default Home;