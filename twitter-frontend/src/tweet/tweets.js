import axios from "axios"

//액션 타입

const GET_TWEETS = 'tweets/GET_TWEETS'
const GET_TWEETS_SUCCESS = 'tweets/GET_TWEETS_SUCCESS'
const GET_TWEETS_ERROR = 'tweets/GET_TWEETS_ERROR'
const GET_TWEET = 'tweet/GET_TWEETS'
const GET_TWEET_SUCCESS = 'tweet/GET_TWEETS_SUCCESS'
const GET_TWEET_ERROR = 'tweet/GET_TWEETS_ERROR'

export const getTweet = (id) => async dispatch => {
    const token = localStorage.token
    dispatch({ type: GET_TWEET });
    try {
        const tweet = await axios.get('http://localhost:8080/api/tweets/' + id,
            {
                headers:
                {
                    Authorization: 'Bearer ' + token
                }
            })
        dispatch({ type: GET_TWEET_SUCCESS, tweet })
    } catch (e) {
        dispatch({ type: GET_TWEET_ERROR, error: e })
    }
}

export const getTweets = () => async dispatch => {
    const token = localStorage.token
    dispatch({ type: GET_TWEETS })
    try {
        const tweets = await axios.get("http://localhost:8080/api/tweets",
            {
                headers:
                {
                    Authorization: 'Bearer ' + token
                }
            })
        dispatch({ type: GET_TWEETS_SUCCESS, tweets })
    } catch (e) {
        dispatch({ type: GET_TWEETS_ERROR, error: e })
    }
}

const initialState = {
    tweets: {
        loading: false,
        data: null,
        error: null
    },
    tweet: {
        loading: false,
        data: null,
        error: null
    }
};

export default function tweets(state = initialState, action) {
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                tweets: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: {
                    loading: false,
                    data: action.tweets,
                    error: null
                }
            };
        case GET_TWEETS_ERROR:
            return {
                ...state,
                tweets: {
                    loading: true,
                    data: null,
                    error: action.error
                }
            };
        case GET_TWEET:
            return {
                ...state,
                tweet: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_TWEET_SUCCESS:
            return {
                ...state,
                tweet: {
                    loading: false,
                    data: action.tweet,
                    error: null
                }
            };
        case GET_TWEET_ERROR:
            return {
                ...state,
                tweet: {
                    loading: true,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state
    }

}