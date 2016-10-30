import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import './App.css';

class App extends Component {
  render() {
    const {tweets} = this.props;
    return <Line data={tweets} width="1200" height="250"/>;
  }
}

export default App;
