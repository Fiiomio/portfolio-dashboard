import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { UserProvider } from './UserContext';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ user, setUser ] = useState ({
    loginKey: null
  })

  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect( () => {

  fetch('http://localhost:4000/users/login', {
    headers: {
      authorization: `Bearer ${ localStorage.getItem ('token')}`
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data === true) {
      setUser ({
        loginKey: true
      })
    } else {
      setUser ({
        loginKey: false
      })}
      
  })

  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
