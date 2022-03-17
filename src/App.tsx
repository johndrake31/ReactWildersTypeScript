import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Wilders from './components/Wilders';
import WilderForm from './components/WilderForm';
import Header from './components/Header';
const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <Wilders />
        </Route>
        <Route path='/Home' exact>
          <Home />
        </Route>
        <Route path='/Wilders' exact>
          <Wilders />
        </Route>
        <Route path='/wilderform' exact>
          <WilderForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
