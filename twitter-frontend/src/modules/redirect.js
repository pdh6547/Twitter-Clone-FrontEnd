export const signUpRedirect = () => (dispatch, getState, { history }) => {
  history.push('/signin')
};

export const postTweetRedirect = () => (dispatch, getState, { history }) => {
  history.push('/main/home')
};

export const deleteTweetRedirect = () => (dispatch, getState, {history}) => {
  history.push('/main/home')
}

export const postSignIn = () => (dispatch, getState, {history}) => {
    history.push('/main/home')
}