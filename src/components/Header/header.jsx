import React from 'react';
import image from '../../Asset/Image/logo.png'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark  rounded-0  px-5"
      >
      <Link class="navbar-brand" to="/">
        <img src={image} width="200" height="50" class="d-inline-block align-top" alt="" />
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <h5 >Home</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <h5>About</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <h5>Contact</h5>
            </Link>
          </li>

        </ul>

      </div>
      <div className="d-flex justify-content-end">
        <Link to="/auth/login"><div className="btn text-success f-bold p-0">Login </div></Link>
        &nbsp;
        /
        &nbsp;
        <Link to="/auth/register"><div className="btn text-warning f-bold p-0"> Register</div></Link>
        &nbsp;&nbsp;
        <Link to='/auth/validation'><div className=" btn py-0 px-1 btn-warning shadow f-bold">Dashboard</div></Link>
      </div>
    </nav>
  );
}
