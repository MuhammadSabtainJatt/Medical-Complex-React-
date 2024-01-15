import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Doctor from './Doctors/doctor';
import NewDoctor from './Doctors/addDoctor';
import Appointment from './Appointments';
import Departments from './Departments';
import Messages from './Messages/index';
import Header from './DashHeader/header';

export default function Index() {
  return (
    <Routes>
      <Route path='/' element={<WithHeader><Main /></WithHeader>} />
      <Route path='/doctor' element={<WithHeader><Doctor /></WithHeader>} />
      <Route path='/departments' element={<WithHeader><Departments /></WithHeader>} />
      <Route path='/appointments' element={<WithHeader><Appointment /></WithHeader>} />
      <Route path='/messages' element={<WithHeader><Messages /></WithHeader>} />
      <Route path='/addDoctor' element={<NewDoctor />} />
    </Routes>
  );
}

const WithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
