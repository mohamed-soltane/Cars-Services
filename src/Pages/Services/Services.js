import React, { Component } from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './Services.css';
 


class Services extends Component {
  state = { 
     services: [
    {
      id: 'p1',
      name: 'Samir',
      email: 'Samir@gmail.com',
      carM: 'Toyota Corrolla',
      service: 'Oil Change',
      employe: 'u1'
    },
    {
      id: 'p1',
      name: 'Samir',
      email: 'Samir@gmail.com',
      carM: 'Toyota Corrolla',
      service: 'Oil Change',
      employe: 'u1'
    },
    {
      id: 'p1',
      name: 'Samir',
      email: 'Samir@gmail.com',
      carM: 'Toyota Corrolla',
      service: 'Oil Change',
      employe: 'u1'
    },
    {
      id: 'p1',
      name: 'Samir',
      email: 'Samir@gmail.com',
      carM: 'Toyota Corrolla',
      service: 'Oil Change',
      employe: 'u1'
    },
    {
      id: 'p2',
      name: 'Samir',
      email: 'Samir@gmail.com',
      carM: 'Honda Civic',
      service: 'Brakes',
      employe: 'u1'
    }
  ]
  }
  render(){
    return(
      <div className="row">

      <ul className="services-list">
        {this.state.services.map(service => {
          return <div className={"col-12  col-md-6 col-lg-4"}><ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  email={service.email}
                  carM={service.carM}
                  employe={service.employe}
            /> </div>
        })}
      </ul>
      </div>
    );
  };
}
 
export default Services;