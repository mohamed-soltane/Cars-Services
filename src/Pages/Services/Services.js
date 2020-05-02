import React, { Component } from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './Services.css';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
 


class Services extends Component {
  state = { 
    services: [],
    newServiceModal: false,
    newServiceData: {
      name: '',
      email: '',
      carM: '',
      service: '',
      employe: ''
    },
  }
  togglenewServiceModal(){
    this.setState({
      newServiceModal : !this.state.newServiceModal
    })
  }
  addService() {
    axios.post('http://localhost:3000/services', this.state.newServiceData).then((res) => {
      let {services} = this.state;
      services.push(res.data);
      this.setState({
        services, newServiceModal: false,
         newServicekData: {
          name: '',
          email: '',
          carM: '',
          service: '',
          employe: ''
        }
      })

    })
  }


  componentDidMount() {
    axios.get('http://localhost:3000/services')
    .then((response) => {
      this.setState({
        services: response.data
      })
    })
  }
  render(){
    console.log(this.state.services)
    return(
      <React.Fragment>
        <div className=" row-button">
          <button  onClick={this.togglenewServiceModal.bind(this)} className="btn btn-secondary mt-4" >
              Submit Service
          </button>
        </div>
        

        <Modal isOpen={this.state.newServiceModal} toggle={this.togglenewServiceModal.bind(this)}>
          <ModalHeader toggle={this.togglenewServiceModal.bind(this)}>Add Service</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="name">name</Label>
            <Input id="name" placeholder="Enter a your name .." value= {this.state.newServiceData.name} onChange={e =>{
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
            <Input  id="service" placeholder="Select your Employe .." value= {this.state.newServiceData.service} onChange={e =>{
                let {newServiceData} = this.state;
                newServiceData.service = e.target.value;
                this.setState({
                  newServiceData
                })
                console.log(newServiceData)
              }}>
              <option>Jack Robinson</option>
              <option>Rose BEN</option>
              <option>James GN</option>
              <option>Jiff Alberto</option>
              <option>Antonio Posboy</option>
            </Input>
        
          </FormGroup>
       
          <FormGroup>
            <Label for="employe">employe</Label>
            <Input id="employe" placeholder="Rate this book .." value= {this.state.newServiceData.employe} onChange={e =>{
              let {newServiceData} = this.state;
              newServiceData.employe = e.target.value;
              this.setState({
                newServiceData
              })
              console.log(newServiceData)
            }}/> 
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.addService.bind(this)}>Add Book</button>{' '}
            <button color="secondary" onClick={this.togglenewServiceModal.bind(this)}>Cancel</button>
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
              employe={service.employe}
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