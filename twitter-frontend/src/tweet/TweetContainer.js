import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Tweet from './Tweet'
import { getTweet } from './tweets'


function TweetContainer({match}) {

    const id = match.params.id
    const { data, loading, error } = useSelector(state => state.tweets.tweet)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTweet(id))
    }, [dispatch])
    if (loading) return null;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <Tweet tweet={data.data} />
}

export default TweetContainer