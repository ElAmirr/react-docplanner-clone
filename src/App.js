import React from 'react';
import Head from './head';
import Main from './main';
import Foot from './foot';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head/>
      <Main/>
      <Foot/>
    </div>
  );
}

export default App;
