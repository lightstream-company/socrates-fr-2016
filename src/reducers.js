
const initialTweets = {};

const ONE_HOUR = 60 * 60 * 1000;
const now = Date.now();
const currentHour = now - now % ONE_HOUR;
initialTweets[currentHour] = 0;
for(let i=0; i<(11*24); i++){
  initialTweets[currentHour - (i* ONE_HOUR)] = Math.round(Math.random() * 20);
  //initialTweets[currentHour - (i* ONE_HOUR)] = 0;
}


export function tweets(state = initialTweets, action){
  const {type} = action;
  switch(type){
    //case RECEIVE_NEW_TWEET:
      //extract timestamp from tweet
      //find index by hours
      //aggregate in state according to the timestamp
    default:
      return state;
  }
}

export function retweets(){
  return {};
}

export function topTweets(){
  return {};
}
