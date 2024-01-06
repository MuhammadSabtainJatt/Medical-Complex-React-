import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import care from '../../Asset/Image/about-01-803x458.jpg'

export default function About() {

  const [year, setYear] = useState(0);
  const [doctor, setDoctor] = useState(0);
  const [department, setDepartment] = useState(0);
  const [medService, setMedService] = useState(0);

  const years = 26;
  const doctors = 7;
  const departments = 26;
  const medicalServices = 12;

  useEffect(() => {
    const yearInterval = setInterval(() => {
      if (year < years) {
        setYear((prevYear) => prevYear + 1);
      }
    }, 50);

    const doctorInterval = setInterval(() => {
      if (doctor < doctors) {
        setDoctor((prevDoctor) => prevDoctor + 1);
      }
    }, 50);

    const departmentInterval = setInterval(() => {
      if (department < departments) {
        setDepartment((prevDepartment) => prevDepartment + 1);
      }
    }, 50);

    const medServiceInterval = setInterval(() => {
      if (medService < medicalServices) {
        setMedService((prevMedService) => prevMedService + 1);
      }
    }, 50);

    return () => {
      clearInterval(yearInterval);
      clearInterval(doctorInterval);
      clearInterval(departmentInterval);
      clearInterval(medServiceInterval);
    };
  }, [year, doctor, department, medService, years, doctors, departments, medicalServices]);

  return (
    <div className="container-fluid">
      <div className="container mainAbout">
        <div className="row">
          <div className="col">
            <div className="image mt-5" >
              <h1 style={{ color: "gold" }}>About Us</h1>
            </div>
            <p className='my-3'><Link style={{ textDecoration: "none", color: "gold" }}> Home </Link> <span> -  About </span>
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="row my-5 aboutClinic">
        <div className="col-12 col-lg-8">
          <img src={care} className='rounded-5 w-100 shadow image' alt="" />
        </div>
        <div className="col-12 col-lg-4">
          <h1 className='my-4 textWithLine'>About Clinic</h1>
          <p className='my-2 text'>
            The Medical private medical clinic specializes in a wide variety of health issues, related to absolutely any age or severity level. Our seasoned team of highly trained physicians and practical nurses will be glad to help you 24/7!
          </p>
          <div className="row my-5">
            <div className="col-12 col-md-6"></div>
            <div className="col-12 col-md-6">abc</div>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6">abc</div>
            <div className="col-12 col-md-6">abc</div>
          </div>
        </div>
      </div>


      {/* ///////////////////////////////////////////////////////////// */}

      <div className="container">
        <div className="row counting bg-dark text-white text-center">
          <div className="col-12 col-md-6 col-lg-3">
            <h1>{year}</h1>
            YEARS OF EXPERIENCE
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h1>{`0${doctor}`}</h1>
          EXPERT DOCTORS
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h1>{department}</h1>
          DEPARTMENTS
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h1>{medService}</h1>
          MEDICAL SERVICES  
          </div>
        </div>
      </div>
    </div>
  )
}
