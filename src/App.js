import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Lottery from './containers/Lottery/Lottery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Lottery />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
