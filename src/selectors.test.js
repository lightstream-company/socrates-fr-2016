/* global expect */
import { tweetsForLineCharts } from './selectors';

it('should format state for LineChart', () => {

  const state = {
    tweets: {
      '3500000': 19,
      '10700000': 5,
      '7100000': 13
    }
  };

  const expectedValue = {
    labels: ['1h', '2h', '3h'],
    datasets: [{
      data: [19, 13, 5]
    }]
  };

  expect(tweetsForLineCharts(state)).toEqual(expectedValue);
});
