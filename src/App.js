import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Amigos } from './components/amigos';
import { Login } from './components/login';


const lista = ['Diego', 'Victor', 'Naomi', 'Leon'];

function App() {
  const [sesion, setSesion] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
      <Header title="Mi primer proyecto en React" color='green'/>
        <img src={logo} className="App-logo" alt="logo" />
 

      {sesion === true ? 
      <>
      <Login/>
      <button onClick={()=> {setSesion(false)}}>Cerrar sesión</button>
      <Header title="Bienvenido" color='red'/>
      <Amigos amigos = {lista}/>
      


      </>  
      :
      <>
        <p>No has iniciado sesion...</p>
        <button onClick={()=> {setSesion(true)}}>Iniciar sesión</button>
      </>  


     }
</header>
    </div>
  );
}

export default App;
