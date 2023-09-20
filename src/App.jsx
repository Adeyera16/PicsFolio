import React from 'react';
import Login from './components/Login';
import Signup from './components/SignUp';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Images from './components/Images';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SearchBar />
      <Images />
      <Login />
      <Signup />
    </div>
  )
}

export default App