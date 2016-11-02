import { connect } from 'react-redux';
import App from './App';
import { dataForLineCharts } from './selectors';

export default connect((state) => {
  return {
    tweets: dataForLineCharts(state)
  };
})(App);
