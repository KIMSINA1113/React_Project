import React, { Component } from 'react';
import Header from './component/commons/Header';
import Navigation from './component/commons/Navi'
import Router from './component/Routes/Router.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div>
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
