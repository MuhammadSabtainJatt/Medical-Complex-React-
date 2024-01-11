import { faCalendarDays, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { firestore } from '../../Config/config';
import { message } from 'antd';
import departmentImage from '../../Asset/Image/departments-991x661.jpg'

const InitialState = {
  departments: '',
  phone: '',
  email: '',
}
export default function Home() {
  const [formData, setFormData] = useState(InitialState);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { departments, phone, email } = formData

    const today = new Date()
    if (!phone || !departments || !email) {
      return message.error("Please Enter all input feilds Correct")
    }
    const appointmentsData = {
      email, phone, departments,
      dateCreated: serverTimestamp(),
      status: "active",
    }
    try {
      const docRef = await addDoc(collection(firestore, "AppointmentsData"), appointmentsData);
      message.success("Your Appointments is Submitted Successfully! ThankYou")
    } catch (e) {
      console.error("Error adding document: ", e);
      message.error("Something went wrong ")
    }
    setFormData(InitialState)
  }


  const currentDiv = (n) => {
    showDivs(setSlideIndex(n));
  };

  const showDivs = (n) => {
    let i;
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > x.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(x.length);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-opacity-off";
  };

  return (
    <div className="container-fluid">
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="image1">
                    <h1 className='text-warning'>Special Touch</h1>
                    <div className="btn btn-warning">Make An Appointment</div>
                  </div>

                </div>
                <div class="carousel-item">
                  <div className="image2">
                    <h1 className='text-warning'>Medical Clinic</h1>
                    <div className="btn btn-warning">Make An Appointment</div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="image3">
                    <h1 className='text-warning'>Medical Service</h1>
                    <div className="btn btn-warning">Make An Appointment</div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* main container  */}

      <div className="row p-4">
        <div className="col-12 col-lg-6 p-3  Cards ">
          <Card  >
            <Card.Header style={{ background: 'linear-gradient(to right, #000, gray)' }}>
              <div className="d-flex align-items-center">
                <div style={{ padding: '3px', color: "white", marginRight: '15px' }}>
                  <div className="h3"><FontAwesomeIcon icon={faCalendarDays} /></div>
                </div>
                <h5 className="mb-0 text-white">Doctor Timetable</h5>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-12 col-md 6">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'start' }}>Weekdays</td>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'end' }}>8:00 – 20:00</td>
                      </tr>
                      <tr>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'start' }}>Saturday</td>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'end' }}>9:30 – 17:30</td>
                      </tr>
                      <tr>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'start' }}>Sunday</td>
                        <td style={{ borderBottom: '1px solid #dee2e6', padding: '10px', textAlign: 'end' }}>9:30 – 15:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-12 col-md 6 text-center m-auto">
                  <p cl>View a timetable showing when our doctors are usually available.</p>
                  <div className="btn p-2 text-white w-50" style={{ background: 'linear-gradient(to right, #000, gray)', border: "none" }}>
                    Show TimeTable
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-6 p-3 Cards ">
          <Card >
            <Card.Header style={{ background: 'linear-gradient(to right, #000, gray)' }}>
              <div className="d-flex align-items-center">
                <div style={{ padding: '3px', color: "white", marginRight: '15px' }}>
                  <div className="h3"><FontAwesomeIcon icon={faCalendarDays} /></div>
                </div>
                <h5 className="mb-0 text-white">Make an Appointment</h5>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-12 col-md-6 p-2">
                  <select
                    id="selectOption"
                    className='input shadow'
                    name='departments'
                    value={formData.departments}
                    onChange={handleChange}
                  >
                    <option value="">Select Departments</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Dentistry">Dentistry</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Pulmonology">Pulmonology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Diagnostics">Diagnostics</option>
                  </select>
                </div>
                <div className="col-12 col-md-6 p-2">
                  <input
                    type="text"
                    className='input shadow'
                    placeholder='Phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 p-2">
                  <input
                    type="email"
                    className='input shadow'
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-6 p-2 text-center">
                  <div
                    className="btn input w-100 shadow"
                    style={{ background: 'linear-gradient(to right, #000, gray)', border: "none" }}
                    onClick={handleSubmit}
                  >
                    <p className=' my-2 text-white'>Add Appointment</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 text-center p-2">
          <div style={{ backgroundColor: "lightgray" }} className='p-5'>
            <h2>
              About Clinic
            </h2>
            <p className='f-smaller'>
              Our clinic specializes in a wide variety of health issues, related to absolutely any age or severity level. Our seasoned team of highly trained physicians and practical nurses will be glad to help you.
            </p>
            <div className="row">
              <div className="col-12 col-sm-6 my-2">
                <h5 className='d-inline me-2'><FontAwesomeIcon icon={faCheck} className='text-warning' /></h5>
                <h5 className='d-inline' >Qualified Doctors</h5>
              </div>
              <div className="col-12 col-sm-6 my-2">
                <h5 className='d-inline me-2'><FontAwesomeIcon icon={faCheck} className='text-warning' /></h5>
                <h5 className='d-inline' >Emergency Help</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 my-2">
                <h5 className='d-inline me-2'><FontAwesomeIcon icon={faCheck} className='text-warning' /></h5>
                <h5 className='d-inline' >Individual Approach</h5>
              </div>
              <div className="col-12 col-sm-6 my-2">
                <h5 className='d-inline me-2'><FontAwesomeIcon icon={faCheck} className='text-warning' /></h5>
                <h5 className='d-inline' >Modern Equipment</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7 p-2">
          <div style={{ backgroundColor: "lightgray" }} className='p-2 text-center'>

          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-lg-5">
          <img src={departmentImage} className='w-100' alt="" />
        </div>
        <div className="col-12 col-lg-4" style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "left", backgroundColor: "lightgray" }}>
          <h3>
            Departments
          </h3>
          <p className='my-3 f-smaller'>
            Click the department name you are looking for to view more information and access resources specific to this area.
          </p>
          <button
            className="custom-button"
          >
            More Departments
          </button>
        </div>
        <div className="col-12 col-lg-3">khgcqudwa</div>
      </div>





    </div>
  );
}
