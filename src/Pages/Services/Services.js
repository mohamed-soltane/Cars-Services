import React, { Component } from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './Services.css';
import {Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
 


class Services extends Component {
  state = { 
    services: [],
    employees: [],
    newServiceModal: false,
    editServiceModal: false,
    newServiceData: {
      id: '',
      name: '',
      email: '',
      carM: '',
      service: '',
      employee: '',
      employeeId: ''
     
    },
    editServiceData: {
      id: '',
      name: '',
      email: '',
      carM: '',
      service: '',
      employee: '',
      employeeId: ''
    }
  }
  togglenewServiceModal(){
    this.setState({
      newServiceModal : !this.state.newServiceModal
    })
  }
  toggleEditServiceModal(){
    this.setState({
      editServiceModal : !this.state.editServiceModal
    })
  }
  editService(id, name, email, carM, service, employee, employeeId){
    this.setState({
      editServiceData: {id, name, email, carM, service, employee, employeeId },
      editServiceModal: !this.state.editServiceModal
    })
    
  }
  addService() {
   const service = {
    name: this.state.newServiceData.name,
    email: this.state.newServiceData.email, 
    carM:  this.state.newServiceData.carM,
    service:  this.state.newServiceData.service,
    employeeId:  Number(this.state.newServiceData.employeeId),
  }
    axios.post('http://localhost:3000/services', service).then((res) => {
      let {services} = this.state;
      services.push(res.data);
      this.setState({
        services, newServiceModal: false,
         newServicekData: {
          id: '',
          name: '',
          email: '',
          carM: '',
          service: '',
          employee: '',
          employeeId: ''
        }
      })

    })
  }
  updateService() {
    const editService = {
      id: this.state.editServiceData.id,
      name: this.state.editServiceData.name,
      email: this.state.editServiceData.email, 
      carM:  this.state.editServiceData.carM,
      service:  this.state.editServiceData.service,
      employeeId:  Number(this.state.editServiceData.employeeId),
    }
    let {id} = this.state.editServiceData
    axios.put(`http://localhost:3000/services/${id}` , editService).then((res) => {
      this._refreshServices();
    })

    this.setState({
      editServiceModal : !this.state.editServiceModal,
      editServiceData: {
        id: '',
        name: '',
        email: '',
        carM: '',
        service: '',
        employee: ''
      }
    })

  }

  deleteService(id) {
    
    axios.delete('http://localhost:3000/services/' + id).then((response) => {
      this._refreshServices();
    });
  }
  
  componentDidMount() {
    this._refreshServices();
    axios.get('http://localhost:3000/employees')
    .then((response) => {
      this.setState({
        employees: response.data,
        
      })
    })
  }
  
 

  _refreshServices() {
    axios.get('http://localhost:3000/services')
    .then((response) => {
      this.setState({
        services: response.data
      })
    })
  }
  render(){
    console.log(this.state.services);
    console.log("employees", this.state.employees)
  
    return(
      <React.Fragment>
         <div className=" row-button">
          <button  onClick={this.togglenewServiceModal.bind(this)} className="btn btn-secondary mt-4" >
              Claim Service
          </button>
        </div>
        

        <Modal isOpen={this.state.newServiceModal} toggle={this.togglenewServiceModal.bind(this)}>
          <ModalHeader toggle={this.togglenewServiceModal.bind(this)} >Claim Service</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="name">name</Label>
            <Input id="name" placeholder="Enter  your name .." value= {this.state.newServiceData.name} onChange={e =>{
              let {newServiceData} = this.state;
              newServiceData.name = e.target.value;
              this.setState({
                newServiceData
              })
              console.log(newServiceData)
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">email</Label>
            <Input id="email" placeholder="Enter your Email .." value= {this.state.newServiceData.email} onChange={e =>{
              let {newServiceData} = this.state;
              newServiceData.email = e.target.value;
              this.setState({
                newServiceData
              })
              console.log(newServiceData)
            }}/> 
          </FormGroup>
          <FormGroup>
            <Label for="carM">carM</Label>
            <Input id="carM" placeholder="Enter the car Model .." value= {this.state.newServiceData.carM} onChange={e =>{
              let {newServiceData} = this.state;
              newServiceData.carM = e.target.value;
              this.setState({
                newServiceData
              })
              console.log(newServiceData)
            }}/> 
          </FormGroup>
          <FormGroup >
            <Label for="service">Service</Label>
            <Input  id="service" type="select" placeholder="How we can help you .."value= {this.state.newServiceData.service} onChange={e =>{
                let {newServiceData} = this.state;
                newServiceData.service = e.target.value;
                this.setState({
                  newServiceData
                })
                console.log(newServiceData)
              }}>
              <option>Oil Change</option>
              <option>Brakes</option>
              <option>Windows Broken</option>
              <option>Deep Cleaning</option>
            </Input>
        
          </FormGroup>
       
          <FormGroup>
            <Label for="employee">employee</Label>
            <Input id="employee" type="select" placeholder="Choose your employee .." value= {this.state.newServiceData.employeeId}
            onChange={e =>{
              let {newServiceData} = this.state;
              
              newServiceData.employeeId = e.target.value
              this.setState({
                  newServiceData
              })
              console.log("create", newServiceData)
              }}>
               <option> ... </option>
             {this.state.employees.map(employee =>
                <option type="Number" key={employee.id} value={employee.id} id={employee.id}>
                    {employee.name}
                </option> 
            )}
            </Input>
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.addService.bind(this)}>Add Service</button>{' '}
            <button color="secondary" onClick={this.togglenewServiceModal.bind(this)}>Cancel</button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.editServiceModal} toggle={this.toggleEditServiceModal.bind(this)} >
          <ModalHeader toggle={this.toggleEditServiceModal.bind(this)}>Update book</ModalHeader>
          <ModalBody>
            <FormGroup>
                <Label for="name">name</Label>
                <Input id="name" placeholder="Enter a  book name .." value= {this.state.editServiceData.name} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.name = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="email">email</Label>
                <Input id="email" placeholder="enter a  email .." value= {this.state.editServiceData.email} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.email = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="carM">carM</Label>
                <Input id="carM" placeholder="enter a  carM .." value= {this.state.editServiceData.carM} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.carM = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="service">service</Label>
                <Input id="service" type="select" placeholder="enter a  service .." value= {this.state.editServiceData.service} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.service = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}>
                  <option>Oil Change</option>
                  <option>Brakes</option>
                  <option>Windows Broken</option>
                  <option>Deep Cleaning</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="employee">employee</Label>
                <Input id="employee" type="select" placeholder="enter a  employee .." value= {this.state.editServiceData.employeeId} 
                  onChange={e =>{
                  let {editServiceData} = this.state;
                  editServiceData.employeeId = e.target.value;
                  this.setState({
                      editServiceData
                  })
                  console.log("edit",editServiceData)
                  }}>
                    <option> ... </option>
                  {this.state.employees.map(employee =>
                  <option key={employee.id} value={employee.id} id={employee.id}>
                      {employee.name}
                  </option> 
                  )}
            </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.updateService.bind(this)}>Update Service</button>{' '}
            <button color="secondary" onClick={this.toggleEditServiceModal.bind(this)}>Cancel</button>
          </ModalFooter>
      </Modal>

     
      <div className="row">
      <ul className="services-list">
        {this.state.services.map(service => {
          return <div className={"col-12  col-md-6 col-lg-4"} key={service.id}><ServiceItem
              key={service.id}
              id={service.id}
              name={service.name}
              email={service.email}
              carM={service.carM}
              service={service.service}
              employee={service.employee}
              employeeId={service.employeeId}
              editService={this.editService.bind(this, service.id, service.name, service.email, service.carM, service.service, service.employee, service.employee)}
              deleteService={this.deleteService.bind(this, service.id)}
              />
            </div>
        })}
      </ul>
      </div>
      </React.Fragment>
    );
  };
}
 
export default Services;