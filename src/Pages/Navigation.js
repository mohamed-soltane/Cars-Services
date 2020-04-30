
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Navigation.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md" m-5>
        <NavbarBrand className="navbrand" href="/">Cars Services</NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="Nitem">
              <NavLink className="Nlink"  href="/">Home</NavLink>
            </NavItem >
            <NavItem className="Nitem">
              <NavLink className="Nlink" href="/Services">Services</NavLink>
            </NavItem>
            <NavItem className="Nitem">
              <NavLink  className="Nlink" href="/Employes">Employes</NavLink>
            </NavItem>
            <NavItem >
              <NavLink  className="Nlink" href="/login">login</NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;