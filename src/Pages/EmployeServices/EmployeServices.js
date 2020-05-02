import React, { Component } from 'react';
import Employes from '../Employes/Employes';
class EmployeServices extends Component {
state = { 
    employes: [
   {
     id: 'u1',
     name: 'Jack',
     email: 'Jack@gmail.com',
     services: '5 Services'     
   },
   {
    id: 'u1',
    name: 'Jack',
    email: 'Jack@gmail.com',
    services: '5 Services'     
  },
  {
    id: 'u1',
    name: 'Jack',
    email: 'Jack@gmail.com',
    services: '5 Services'     
  },
  
   {
    id: 'u1',
    name: 'Jack',
    email: 'Jack@gmail.com',
    services: '5 Services'     
  }
 ]
 }
 render() {
  return <Employes items={this.state.employes} />;
};
}

export default EmployeServices;