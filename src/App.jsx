import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Signup from './pages/SignUp';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  }

  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      <Routes>
        <Route index exact element={<Login onLogin={() => {
                handleLogin();
                navigate('/home');
              }} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
