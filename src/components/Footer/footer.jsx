import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  const year = new Date().getFullYear()
  return (
    <div className="container-fluid text-white py-2 text-center bg-dark">
      <div className="row">
        <div className="col">
          <p className='mb-0'> &copy; Copy {year} | All Right Reserved  Developed By <Link to="https://github.com/MuhammadSabtainJatt" target='blank' style={{textDecoration:"none"}}><span className='text-warning'>Muhammad Sabtain </span></Link> .</p>
        </div>
      </div>
    </div>
  )
}
