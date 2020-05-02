import React, { Component } from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './Services.css';
import { Table, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
 


class Services extends Component {
  state = { 
    services: [],
    newServiceModal: false,
    editServiceModal: false,
    newServiceData: {
      id: '',
      name: '',
      email: '',
      carM: '',
      service: '',
      employe: ''
    },
    editServiceData: {
      id: '',
      name: '',
      email: '',
      carM: '',
      service: '',
      employe: ''
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
  editService(id, name, email, carM, service, employe){
    this.setState({
      editServiceData: {id, name, email, carM, service, employe}, editServiceModal: !this.state.editServiceModal
    })
    
  }
  addService() {
    axios.post('http://localhost:3000/services', this.state.newServiceData).then((res) => {
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
          employe: ''
        }
      })

    })
  }
  updateService() {
    let {id, name, email, carM, service, employe} = this.state.editServiceData
    axios.put('http://localhost:3000/services/' + this.state.editServiceData.id, {
      id, name, email, carM, service, employe
    }).then((res) => {
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
        employe: ''
      }
    })

  }

  deleteService(id) {
    
    axios.delete('http://localhost:3000/services/' + id).then((response) => {
      this._refreshServices();
    });
  }


  componentDidMount() {
    this._refreshServices()
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
    console.log(this.state.services)
    return(
      <React.Fragment>
        <div className=" row-button">
          <button  onClick={this.togglenewServiceModal.bind(this)} className="btn btn-secondary mt-4" >
              Claim Service
          </button>
        </div>
        

        <Modal isOpen={this.state.newServiceModal} toggle={this.togglenewServiceModal.bind(this)}>
          <ModalHeader toggle={this.togglenewServiceModal.bind(this)}>Add Service</ModalHeader>
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
            <Input  id="service" placeholder="How we can help you .."value= {this.state.newServiceData.service} onChange={e =>{
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
            <Input id="employe" placeholder="Choose your employe .." value= {this.state.newServiceData.employe} onChange={e =>{
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
                <Input id="service" placeholder="enter a  service .." value= {this.state.editServiceData.service} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.service = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}/>
            </FormGroup>
            <FormGroup>
                <Label for="employe">employe</Label>
                <Input id="employe" placeholder="enter a  employe .." value= {this.state.editServiceData.employe} onChange={e =>{
                let {editServiceData} = this.state;
                editServiceData.employe = e.target.value;
                this.setState({
                    editServiceData
                })
                console.log(editServiceData)
                }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.updateService.bind(this)}>Update Book</button>{' '}
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
              employe={service.employe}
              editService={this.editService.bind(this, service.id, service.name, service.email, service.carM, service.service, service.employe,)}
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