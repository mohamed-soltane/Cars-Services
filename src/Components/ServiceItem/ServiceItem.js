import React from 'react';
import './ServiceItem.css';

const ServiceItem = props => {

    const { ID, name, email, carM, service, employe } = props
    return ( 
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title ">Active claim</h5>
                    <p className="card-text ">ID : {ID}</p>

                    <p className="card-text ">Name : {name}</p>
                    <p className="card-text ">Email: {email} </p>
                    <p className="card-text" >Car: {carM}</p>
                    <p className="card-text" >Service: {service}</p>
                    <p className="card-text" >Employe: {employe}</p>
                </div>
            </div> 
        </div>
     );
}
 
export default ServiceItem;