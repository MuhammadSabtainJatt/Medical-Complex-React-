import React from 'react';
import image from '../../Asset/Image/logo.png'
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark  px-5">
      <a class="navbar-brand" href="#">
        <img src={image} width="50" height="50" class="d-inline-block align-top" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <h5 className=' text-white'>Home</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5 className=' text-white'>About</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5 className=' text-white'>Contact</h5>
            </a>
          </li>

        </ul>

      </div>
      <div className="d-flex justify-content-end">
        <div className="btn text-success f-bold p-0">Login </div>
        &nbsp;
        /
        &nbsp;
        <div className="btn text-warning f-bold p-0"> Register</div>
      </div>
    </nav>
  );
}
