/* global expect */
import { dataForLineCharts } from './selectors';

it('should format state for LineChart', () => {

  const state = {
    tweets: {
      '3500000': 19,
      '10700000': 5,
      '7100000': 13
    },
    retweets: {
      '3500000': 9,
      '10700000': 1,
      '7100000': 2
    }
  };

  const expectedValue = {
    labels: ['1h', '2h', '3h'],
    datasets: [{
      data: [19, 13, 5]
    }, {
      data: [9, 2, 1]
    }]
  };

  expect(dataForLineCharts(state)).toEqual(expectedValue);
});
