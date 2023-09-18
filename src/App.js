import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import { UserProvider } from './UserContext';
import { useState, useEffect } from 'react';
import Views from './pages/Views'
import './App.css';

function App() {

  const [ user, setUser ] = useState ({
    loginKey: null
  })

  const unsetUser = () => {
    localStorage.clear();
  }

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/views" element={<Views />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;
