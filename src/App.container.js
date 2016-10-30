import { connect } from 'react-redux';
import App from './App';
import { tweetsForLineCharts } from './selectors';

export default connect((state) => {
  return {
    tweets: tweetsForLineCharts(state)
  };
})(App);
