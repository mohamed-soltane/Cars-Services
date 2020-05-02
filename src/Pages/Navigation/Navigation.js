
import React from 'react';
import {
 Link
} from 'react-router-dom';
import './Navigation.css';

const Example = (props) => {
  return (
    <div className="Nav-1">
      <nav className="navbar navbar-expand-lg  sticky-top">
        <Link className="navbar-brand " to="/">
          <b>e</b><b>S</b>top
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Employes">
                Employes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Example;