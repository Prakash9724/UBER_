import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSingUp from './pages/UserSingUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSingup from './pages/CaptainSingup'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />}/> 
        <Route path='/login' element={<UserLogin />}/> 
        <Route path='/singup' element={<UserSingUp />}/> 
        <Route path='/captain-singup' element={<CaptainSingup />}/> 
        <Route path='/captain-login' element={<CaptainLogin />}/> 
        <Route path='/home' element={<UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>}/>
        <Route path='/users/logout' element={<UserProtectedWrapper>
          {<UserLogout />}
        </UserProtectedWrapper>} />
      </Routes>
    </div>
  )
}

export default App
