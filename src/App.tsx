import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Topbar from './components/topbar/Topbar';
import { Provider } from 'react-redux'
import { store } from './state/store';


function App() {
  return (
    <Provider store={store}>
      <Topbar />
      <Main />
    </Provider>
  );
}

export default App;
