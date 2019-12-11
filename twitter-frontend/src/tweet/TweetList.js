import React from 'react'

function TweetList({ tweets }) {
    return (
        <ul>
            {tweets.map(tweet => (
                <li key={tweet.id}>
                    {tweet.content}
                </li>
            ))}
        </ul>
    )
}

export default TweetList