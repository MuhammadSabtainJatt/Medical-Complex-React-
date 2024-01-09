import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

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
        <div className="col-12 col-md-6 p-3  ">
          <Card>
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
                  <div className="btn p-2 text-white w-50" style={{ background: 'linear-gradient(to right, #000, gray)',border:"none" }}>
                    Show TimeTable
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 p-3  ">
          <Card>
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
                  <div className="btn p-2 text-white w-50" style={{ background: 'linear-gradient(to right, #000, gray)',border:"none" }}>
                    Show TimeTable
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
