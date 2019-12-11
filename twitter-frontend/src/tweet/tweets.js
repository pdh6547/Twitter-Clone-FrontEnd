import axios from "axios"

//액션 타입

const GET_TWEETS = 'tweets/GET_TWEETS'
const GET_TWEETS_SUCCESS = 'tweets/GET_TWEETS_SUCCESS'
const GET_TWEETS_ERROR = 'tweets/GET_TWEETS_ERROR'

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
            dispatch({type: GET_TWEETS_SUCCESS, tweets})
    } catch (e) {
        dispatch({ type: GET_TWEETS_ERROR, error: e })
    }
}

const initialState = {
    tweets: {
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
        default:
            return state
    }

}