import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSingUp from './pages/UserSingUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSingup from './pages/CaptainSingup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/login' element={<UserLogin />}/> 
        <Route path='/singup' element={<UserSingUp />}/> 
        <Route path='/captain-singup' element={<CaptainSingup />}/> 
        <Route path='/captain-login' element={<CaptainLogin />}/> 

      </Routes>
    </div>
  )
}

export default App
