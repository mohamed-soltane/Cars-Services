import React, { Component} from 'react';
import Employees from '../Employees/Employees';
import './EmployeeServices.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';



class EmployeeServices extends Component {
state = { 
  LoadedEmployee: []
}

componentDidMount(){
  const employeeId = useParams().employeeId;
  axios.get(`http://localhost:3000/services`)
  .then((response) => {
     this.setState({
      LoadedEmploye: response.data
    })
  })
}

 
  render() {
  return ( 
    <Employees items={this.state.LoadedEmployee} />
   );
}
}
 
export default EmployeeServices;