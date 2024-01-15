import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './Login/login'
import RegisterForm from './Register/register'
import Validation from './Validation/validation'
export default function index() {
  return (
    <Routes>
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='validation' element={<Validation />} />
    </Routes>
  )
}
