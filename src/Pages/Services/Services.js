import React, { Component } from 'react';
import ServiceItem from "../../Components/ServiceItem/ServiceItem";
import './Services.css';
import axios from 'axios';
 


class Services extends Component {
  state = { 
    services: []
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
      <div className="row">

      <ul className="services-list">
        {this.state.services.map(service => {
          return <div className={"col-12  col-md-6 col-lg-4"} key={service.id}><ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  email={service.email}
                  carM={service.carM}
                  employe={service.employe}
            /> </div>
        })}
      </ul>
      </div>
    );
  };
}
 
export default Services;