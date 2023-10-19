import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AuthCom from '../AuthCom'

const AuthRoute = () => {
  return (
    <Routes>
    <Route path='/dfnos' element={<AuthCom/>}/>
    <Route path='/sdasd' element={<AuthCom/>}/>
    <Route path='/sdfs' element={<AuthCom/>}/>
    </Routes>
  )
}

export default AuthRoute