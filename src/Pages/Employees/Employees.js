import React, { Component } from 'react';
import Employee from '../../Components/Employee/Employee';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';

import './Employees.css';
import axios from 'axios';



class Employees extends Component {
    state = { 
        employees: [],
        newEmployeeModal: false,
        newEmployeeData: {
          id: '',
          name: '',
          email: '',
          
        }
     }
     togglenewEmployeeModal(){
      this.setState({
        newEmployeeModal : !this.state.newEmployeeModal
      })
    }
    addEmployee() {
      axios.post('http://localhost:3000/employees', this.state.newEmployeeData).then((res) => {
        let {employees} = this.state;
        employees.push(res.data);
        this.setState({
          employees, newEmployeeModal: false,
          newEmployeeData: {
            id: '',
            name: '',
            email: '',
            services: ''
          }
        })
  
      })
    }
    deleteEmployee(id) {
      axios.delete('http://localhost:3000/employees/' + id).then((response) => {
        this._refreshEmployees();
      });
    }

     componentDidMount() {
      this._refreshEmployees()
    }
    _refreshEmployees() {
      axios.get('http://localhost:3000/employees')
      .then((response) => {
        this.setState({
          employees: response.data,
          
        })
      })
    }
    
     render() {
      console.log(this.state.employees, this.state.employeeId)
       
    

      
       return(
        <React.Fragment>
        <div className=" row-button">
        <button  onClick={this.togglenewEmployeeModal.bind(this)} className="btn btn-secondary mt-4" >
            Add Employee
        </button>
        <Modal isOpen={this.state.newEmployeeModal} toggle={this.togglenewEmployeeModal.bind(this)}>
          <ModalHeader toggle={this.togglenewEmployeeModal.bind(this)} >Claim Service</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="name">name</Label>
            <Input id="name" placeholder="Enter  employee name .." value= {this.state.newEmployeeData.name} onChange={e =>{
              let {newEmployeeData} = this.state;
              newEmployeeData.name = e.target.value;
              this.setState({
                newEmployeeData
              })
              console.log(newEmployeeData)
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input id="email" placeholder="Enter employee Email .." value= {this.state.newEmployeeData.email} onChange={e =>{
              let {newEmployeeData} = this.state;
              newEmployeeData.email = e.target.value;
              this.setState({
                newEmployeeData
              })
              console.log(newEmployeeData)
            }}/> 
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.addEmployee.bind(this)}>Add Employee</button>{' '}
            <button color="secondary" onClick={this.togglenewEmployeeModal.bind(this)}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
         <div className="row">
   
         <ul className="employes-list">
           {this.state.employees.map(employee => {
             return <div className={"col-12  col-md-6 col-lg-4"} key={employee.id}><Employee
                     key={employee.id}
                     id={employee.id}
                     name={employee.name}
                     email={employee.email}
                     employee={employee.employee}
                     deleteEmployee = {this.deleteEmployee.bind(this, employee.id)}
                                       
                     
               /> </div>
           })}
         </ul>
         </div>
         </React.Fragment>
       );
     };
   }
   

export default Employees;