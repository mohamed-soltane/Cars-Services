import React, { Component } from 'react';
import Employes from '../Employes/Employes';
class EmployeServices extends Component {

 render() {
  return <Employes items={this.state.employes} />;
};
}

export default EmployeServices;