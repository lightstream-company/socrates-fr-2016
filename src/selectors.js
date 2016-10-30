import { createSelector } from 'reselect';
import moment from 'moment';
import _ from 'lodash';

export const tweets = state => state.tweets;

export const tweetsForLineCharts = createSelector(
  tweets,
  (tweets) => {
    const orderedKeys = _.sortBy(Object.keys(tweets).map((key) => parseInt(key, 10))).map(key => key.toString());

    const labels = orderedKeys.map(timestamp => moment(new Date(parseInt(timestamp, 10))).format('h') + 'h');
    console.log(labels);
    return {
      labels,
      datasets: [{
        data: orderedKeys.map((timestamp) => tweets[timestamp])
      }]
    };
  });
