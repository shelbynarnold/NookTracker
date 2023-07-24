import './App.css';
import { Home } from "./Home";
import { Lists } from "./Lists"
import React, { useState, createContext, useEffect } from "react"
import { Login } from "./Login";
import { Register } from "./Register";
// import ItemComponent from './containers/ItemComponent';
import { Switch, Route, useHistory } from "react-router-dom";
import { PostForm } from './Forum/Forum';
import { Fish } from './Fish';
import { Bugs } from './Bugs';
import { List } from './List';
import NavBar from './NavBar';
import { Dashboard } from './Dashboard';

export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState(null);

  const [currentForm, setCurrentForm] = useState('login');

  const history = useHistory()

  useEffect(() => {
    //auto login
    fetch("check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    if (user) {
      history.push("/");
    }
  }, []);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        {/*{user ? <h1> Welcome, {user.username}</h1>} : <h1>User has not been set</h1>}*/}
        {/* //This checks if the user is logged in */}
      {<NavBar />}
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
      </UserContext.Provider>
    </div>
  );
}


export default App; 
