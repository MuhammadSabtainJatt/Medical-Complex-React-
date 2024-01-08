import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Validation from './Validation'
import Main from './Main'

export default function index() {
  return (
    <Routes>
        <Route path='/' element={<Validation />} />
        <Route path='/main' element={<Main />} />
    </Routes>
  )
}
