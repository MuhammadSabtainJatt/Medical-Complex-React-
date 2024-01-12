import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <div className="container-fluid bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <Link className="navbar-brand"  ><h2 className='text-warning'>Dashboard</h2></Link>
                                <button className="navbar-toggler bg-warning border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" >Appointments</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" >Doctors</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" >Departments</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
