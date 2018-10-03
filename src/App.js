import React, { Component } from 'react';
import { Provider } from 'unstated';

import Items from './Components/Items';
import Cart from './Components/Cart';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Items />
          <Cart />
        </Provider>
      </div>
    );
  }
}

export default App;
