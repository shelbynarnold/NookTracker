import './App.css';

import React, { useState } from "react"

import ItemListing from './containers/ItemListing';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <div className='App'>
      {
        currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      <ItemListing />
    </div>
  );
}


export default App; 