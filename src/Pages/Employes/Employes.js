import React, { Component } from 'react';
import Employe from '../../Components/Employe/Employe';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';

import './Employes.css';
import axios from 'axios';



class Employes extends Component {
    state = { 
        employes: [],
    }

     componentDidMount() {
      this._refreshEmployes()
    }
    _refreshEmployes() {
      axios.get('http://localhost:3000/employes')
      .then((response) => {
        this.setState({
          employes: response.data
        })
      })
    }
     render() {
      
       return(
        <React.Fragment>
        <div className=" row-button">
        <button  onClick={""} className="btn btn-secondary mt-4" >
            Add Employe
        </button>
        
      </div>
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
         </React.Fragment>
       );
     };
   }
   

export default Employes;