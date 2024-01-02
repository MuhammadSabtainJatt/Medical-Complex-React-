import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './Login/login'
import RegisterForm from './Register/register'

export default function index() {
  return (
    <Routes>
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
    </Routes>
  )
}
