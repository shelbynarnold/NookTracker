import './App.css';
import React, { useState } from "react"
import { Login } from "./Login";
import { Register } from "./Register";
import ItemComponent from './containers/ItemComponent';

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
      {/* <ItemComponent /> */}
    </div>
  );
}


export default App; 
