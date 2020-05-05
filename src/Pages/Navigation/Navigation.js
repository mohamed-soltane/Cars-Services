
import React, {Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import './Navigation.css';

class Nav extends Component {
  handleLogout = () => {
    //clears user from localStorage and redirects to home page
    this.props.clearUser();
    this.props.history.push('/');
    window.location.reload(false);

}
  render(){
  return (
    <div className="Nav-1">
      <nav className="navbar navbar-expand-lg  sticky-top">
        <Link className="navbar-brand " to="/">
          <p><b>e</b><b>S</b>top</p>
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
            {(this.props.user) ? 
              <>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Employees">
                Employees
              </Link>
            </li>
            <li className="nav-item"><a className="nav-link" onClick={this.handleLogout}>Logout</a></li>
            </>
            :
            <li className="nav-item">
             <Link className="nav-link" to="/auth">
                Login
              </Link>
            </li>
          }
          </ul>
        </div>
      </nav>
    </div>
  );
}}

export default withRouter(Nav);