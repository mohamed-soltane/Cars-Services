import React, { Component } from 'react';
import Employe from '../../Components/Employe/Employe';
import './Employes.css';


class Employes extends Component {
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
       return(
         <div className="row">
   
         <ul className="employes-list">
           {this.state.employes.map(employe => {
             return <div className={"col-12  col-md-6 col-lg-4"}><Employe
                     key={employe.id}
                     id={employe.id}
                     name={employe.name}
                     email={employe.email}
                     services={employe.services}                   
                     
               /> </div>
           })}
         </ul>
         </div>
       );
     };
   }
export default Employes;