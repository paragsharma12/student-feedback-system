import React from 'react';
import { Link } from 'react-router-dom';

function Navebar() {
  return (
    <nav id="oo" className="navbar navbar-expand-lg bg-black p-0">
      <div className="container-fluid">
        <Link to="/" id="sohan" className="navbar-brand text-light">
          <i className="fa-solid fa-user-graduate ml-1 mr-1 me-2"></i>STUDENT FEEDBACK SYSTEM
        </Link>
        <button
          className="navbar-toggler mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex flex-row ms-auto">
            <Link to="/" className="nav-link text-light pe-2 me-3" style={{ fontSize: '1.5rem' }}>
              Home
            </Link>
            <button id="ball" className="tt btn me-3" type="submit">
              <Link to="/Login">Faculty Log In</Link>
            </button>
            <button id="call" className="tt btn" type="submit">
              <Link to="/Admin">Only Admin</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navebar;