import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={"Bienvenidos a la mejor tienda de juegos digitales"} />
    </div>
  )
}

export default App
