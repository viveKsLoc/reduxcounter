import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store/';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
