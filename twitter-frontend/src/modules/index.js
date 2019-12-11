import { combineReducers } from 'redux';
import signin from '../signIn/signin';
import tweets from '../tweet/tweets'

const rootReducer = combineReducers({
  signin,
  tweets
});

export default rootReducer;