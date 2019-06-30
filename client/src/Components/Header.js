import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav">
        <div className="container">
          <NavLink className="navbar-brand js-scroll-trigger" to="#page-top">
            RideIT
          </NavLink>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/">
                Home
                </NavLink>
            </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/driver"> Drivers </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/portfolio">Portfolio </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
