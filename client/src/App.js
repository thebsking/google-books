import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <>
    
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
