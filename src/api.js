import fetch from 'isomorphic-fetch';

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

export function fetchTweets(){
  return fetchJSON('http://172.20.10.4:3000/tweets');
}

export function fetchReTweets(){
  return fetchJSON('http://172.20.10.4:3000/retweets');
}
