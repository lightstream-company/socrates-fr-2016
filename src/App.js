import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import './App.css';

class App extends Component {
  render() {
    const {tweets} = this.props;
    const options = {
      pointHitRadius: 2,
      pointRadius: 1,
      backgroundColor: 'rgba(75,192,192,0.2)'
    };
    return <Line data={tweets} options={options} width="1200" height="450"/>;
  }
}

export default App;
