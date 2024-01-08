import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import Dashboard from './Dashboard'
import Pages from './Pages'
export default function Index() {
    return (
        <Routes>
            <Route path='/*' element={<Pages />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
    )
}
