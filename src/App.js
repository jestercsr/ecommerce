import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Produits from './components/Produits';
import Contact from './components/Contact';
import Admin from './components/Admin';
import ProduitsAll from './components/ProduitsAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/product' Component={ProduitsAll} />
        <Route path='/product/:id' Component={Produits}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/admin' Component={Admin}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
