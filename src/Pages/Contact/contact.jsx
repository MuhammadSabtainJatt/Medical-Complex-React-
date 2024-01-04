import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {


  return (
    <div className="container maincontact">
      <div className="row">
        <div className="col">
          <div className="image mt-5" >
            <h1 style={{color:"gold"}}>Contact Us</h1>
          </div>
          <p className='my-3'><Link  style={{ textDecoration: "none",color:"gold" }}> Home </Link> <span> -  Contact US</span>
          </p>
          <hr />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12 col-md-6 rounded-4 border shadow text-center p-5 " style={{backgroundColor:'white'}} >
          <h2 className='my-2'style={{color:"gold"}}>Get In Touch</h2>
          <small> <p>We are available 24/7 by fax, e-mail or by phone. You can also use our quick
            contact form to ask a question about our services that we regularly provide.</p></small>
            <hr />
          <div className="form1">
            <div className="row">
              <div className="col-12 col-md-6">
                <input type="text" placeholder='Your Name' name='userName' className='shadow' />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" placeholder='Your Email' name='email' className='shadow' />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <input type="date" placeholder='Your Date-of-Birth' className='shadow' name='dob' />
              </div>
              <div className="col-12 col-md-6">
                <input type="text" placeholder='Your Contact Number' className='shadow' name='number' />
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <textarea name="message" id="" className='w-100 shadow ' placeholder="Enter Message" cols="30" rows="3"></textarea>
                <div className="button ">Message</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-2 map ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6095060166713!2d-0.04912252434180703!3d51.52037970975627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d29f90f8797%3A0xd531d835190fe8f0!2sThe%20London%20Independent%20Hospital!5e0!3m2!1sen!2s!4v1704385297456!5m2!1sen!2s" style={{width:"100%",height:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-4 shadow'></iframe>
        </div>
      </div>
    </div>
  );
}
