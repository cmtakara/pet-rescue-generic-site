// imports
import React, { useState,  useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './components/Nav'
// import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Cats from './pages/Cats'
import Dogs from './pages/Dogs'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import Foster from './pages/Foster'
import UpdateCats from './pages/UpdateCats'
import UpdateDogs from './pages/UpdateDogs'

//contexts
import UserContext from './contexts/UserContext'

// css
import './App.css'



function App() {
  const [user, setUser] = useState('')

  console.log('in app user is ', user)

  return (
    <div >
      <UserContext.Provider value={user} >
      <Nav />
    
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dogs' element={<Dogs />} />
          <Route path='cats' element={<Cats />} />
          <Route path='volunteer' element={<Volunteer />} />
          <Route path='foster' element={<Foster />} />
          <Route path='donate' element={<Donate />} />
          <Route path='cat-list' element={ user === '' ? < Home/> : <UpdateCats />} />
          <Route path='dog-list' element={ user === '' ? < Home/> : <UpdateDogs />} />
      </Routes>


      </ UserContext.Provider >      
    </div>
  );
}

export default App
