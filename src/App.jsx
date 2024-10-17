import { useState } from 'react'
import Login from './Components/Login.jsx'
import Forget from './Components/Forget.jsx';
import CreateAccount from './Components/CreateAccount.jsx';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';



import './App.css'

function App() {
  

  return (
  <>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/forget' element={<Forget/>} ></Route>
      <Route path='/create' element={<CreateAccount/>} ></Route>
    </Routes>
   </Router>

  
  </>

   
  )
}

export default App
