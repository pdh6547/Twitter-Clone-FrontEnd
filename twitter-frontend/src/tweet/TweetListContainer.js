import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TweetList from './TweetList'
import { getTweets } from './tweets'


function TweetListContainer() {

    const { data, loading, error } = useSelector(state => state.tweets.tweets)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTweets())
    }, [dispatch])
    if (loading) return null;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;
    return <TweetList tweets={data.data} />
}

export default TweetListContainer