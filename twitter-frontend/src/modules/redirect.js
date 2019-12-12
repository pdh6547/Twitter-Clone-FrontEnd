
export const signUpRedirect = () => (dispatch, getState, { history }) => {
  history.push('/signin')
};

export const tweetRedirect = () => (dispatch, getState, { history }) => {
  const state = getState()
  if(!state.tweets.tweets.loading){
    history.push('/main/home')
  }
};

export const postSignIn = () => (dispatch, getState, { history }) => {
  history.push('/main/home')
}