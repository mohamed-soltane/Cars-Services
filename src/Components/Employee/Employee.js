import React, {Component} from 'react';
import Seif from '../../Images/seiff.jpg';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import './Employee.css';

class Employee extends  Component  {
    state = {
        services:[],
       
    }  
    componentDidMount() {
      console.log(this.props)
      const employeeId = this.props.id;
      console.log('id', employeeId)

      axios.get(`http://localhost:3000/employees/${employeeId}/?_embed=services`)
      .then((response) => {
        console.log('response', response.data)
         this.setState({
           
          services: response.data.services,
          
        })})
      console.log("services", this.state.services)
    }
  
      
    render(){
    const { id, name, email, deleteEmployee} = this.props;
    return ( 
        <div>
            <div className="card">
                <button  onClick = {( )=>deleteEmployee()} className="Bdelete" >X</button>
                <Link to={`/Employees/${id}`}>
                <img src={Seif} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title_employe">{name}</h5>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    
                    <p className="card-text mb-0">Name: {name}</p>
                    <p className="card-text mb-0">Email: {email}</p>
                    <p className="card-text mb-0">Services:{this.state.services.length}</p>

                    
                   
                    <button  onClick to={``} className="Breview" >
                        Add Reviews
                    </button>
                </div>
              </Link>
            </div> 
        </div>
     );
}
}
 
export default withRouter(Employee);