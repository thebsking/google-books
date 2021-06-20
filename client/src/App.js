import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Search} />
      <Route path='/saved' component={Saved} />
    </BrowserRouter>
  );
}

export default App;
