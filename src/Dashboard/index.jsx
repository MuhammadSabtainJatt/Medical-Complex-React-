import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Validation from './Validation'
import Main from './Main'
import Doctor from './Doctors/doctor'
import NewDoctor from './Doctors/addDoctor'


// components 

export default function index() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Validation />} />
      <Route path='/main' element={<NewDoctor />} />
      {/* <Route path='/doctors' element={<Doctor />} /> */}
      {/* <Route path='/addDoctors' element={< />} /> */}

    </Routes>
</>
  )
}
