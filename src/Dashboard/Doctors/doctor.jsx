import React from 'react'
import { Link } from 'react-router-dom'

export default function doctor() {
    return (
        <div className='container-fluid bg-danger'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 my-3">
                        <img src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856940m4nhi.png" className='w-100' alt="" />
                    </div>
                    <div className="col-12 col-md-6 d-flex my-3 flex-column justify-content-center text-center align-content-center">
                        <h1 className='fw-bold text-warning'>WelCome to Webiste</h1>
                        <br />
                        <p className='text-white'>
                            "Expert doctors, compassionate care. Your health, our priority. Trust us for exceptional well-being"
                            If you want an New Doctor then Click on button
                        </p>
                        <Link to=''>
                        <div className="btn btn-warning w-50 p-2 mx-auto text-white">
                            Add New Doctor
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
