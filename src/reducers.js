import { handleActions } from 'redux-actions';

const initialTweets = {};

const ONE_HOUR = 60 * 60 * 1000;
const now = Date.now();
const currentHour = now - now % ONE_HOUR;
initialTweets[currentHour] = 0;
for(let i=0; i<(11*24); i++){
  initialTweets[currentHour - (i* ONE_HOUR)] = 0;
}

export const tweets = handleActions({
  INIT_TWEETS: (state, action) => {
    return action.payload;
  }
}, initialTweets);


export const retweets = handleActions({
  INIT_RETWEETS: (state, action) => {
    return action.payload;
  }
}, initialTweets);

export function topTweets(){
  return {};
}
