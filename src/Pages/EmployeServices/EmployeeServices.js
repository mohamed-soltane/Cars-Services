import React, { Component} from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './EmployeeServices.css';
import axios from 'axios';



class EmployeeServices extends Component {
  state = {
    name:'',
    services:[]
  }
  componentDidMount(){
    const employeeId = this.props.match.params.employeeId;
    console.log('id', employeeId)
    axios.get(`http://localhost:3000/employees/${employeeId}/?_embed=services`)
    .then((response) => {
      console.log('response', response.data)
       this.setState({
        name: response.data.name,
        services: response.data.services,
        
      })
      
    })
  }
  

  render() {
  return ( 
    <React.Fragment>
    <div className="row employee-services">
      
    {this.state.services.map(service => 
    <div className="col-12  col-md-6 col-lg-4">
      <ServiceItem 
      id={service.id}
      name={service.name}
      email={service.email}
      carM={service.carM}
      service={service.service}
      employee={service.employee}
      />
      </div>
    )}
    
    </div>
    </React.Fragment>
   );
}
}
export default EmployeeServices;