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
    if (this.state.services.length === 0){
    return (
      
        <div className="card-empty">
          <h2>No Services found for {this.state.name} </h2>
          
        </div>
     
    );
    }
  return ( 
    <React.Fragment>
      <div ClassName="emplyoe-services_title">
       <h3><b>{this.state.name}</b></h3>
       <h4>{`Cars that ${this.state.name} is working on :`}</h4>
       </div>
    <div className="row">
      
    <div className="employee-services_body">
      
      {this.state.services.map(service => 
     <div className={"col-12  col-md-4 col-lg-4"}>
        <ServiceItem 
        id={service.id}
        name={service.name}
        email={service.email}
        carM={service.carM}
        service={service.service}
        
        />
        </div>
    )}
    </div>
    </div>
    </React.Fragment>
   );
}
}
export default EmployeeServices; 