import './App.css';
import { Home } from "./Home";
import { Lists } from "./Lists"
import React, { useState } from "react"
import { Login } from "./Login";
import { Register } from "./Register";
import ItemComponent from './containers/ItemComponent';
import { Switch, Route } from "react-router-dom";
import { PostForm } from './Forum';
import { Fish } from './Fish';
import { Bugs } from './Bugs';
import { List } from './List';
import { Dashboard } from './Dashboard';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      <Switch>
      <Route path="/login" render={() => (
  currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
)} />
      <Route path="/lists/bugs">
        <Bugs />
      </Route>
      <Route path="/lists/fish">
        <Fish />
      </Route>
      <Route path="/lists">
        <Lists />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/forum">
        <PostForm />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </div>
  );
}


export default App; 
