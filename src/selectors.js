import { createSelector } from 'reselect';
import moment from 'moment';
import _ from 'lodash';

export const tweets = state => state.tweets;
export const retweets = state => state.retweets;

export const dataForLineCharts = createSelector(
  tweets,
  retweets,
  (tweets, rt) => {
    const now = Date.now();
    const orderedKeys = _.sortBy(Object.keys(tweets).map((key) => parseInt(key, 10))).map(key => key.toString()).filter(timestamp => {
      return parseInt(timestamp, 10) > now - 1000 * 60 * 60 * 24 * 3;
    });

    const labels = orderedKeys.map((timestamp) => {
      const date = new Date(parseInt(timestamp, 10));
      const hours = moment(date).format('H');
      if (hours === '0') {
        return moment(date).format('dddd');
      } else {
        return hours + 'h';
      }
    });
    return {
      labels,
      datasets: [{
        label: 'Retweets',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: orderedKeys.map((timestamp) => rt[timestamp])
      }, {
        label: 'Tweets',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: orderedKeys.map((timestamp) => tweets[timestamp])
      }]
    };
  });
