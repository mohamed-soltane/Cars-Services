import React from 'react';


import './ServiceItem.css';

const ServiceItem = props => {

    const { ID, name, email, carM, service } = props
    const {  editService, deleteService} = props
    return ( 
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title_service ">Active Service</h5>
                    <p className="card-text ">ID : {ID}</p>
                    <p className="card-text ">Name : {name}</p>
                    <p className="card-text ">Email: {email} </p>
                    <p className="card-text" >Car: {carM}</p>
                    <p className="card-text" >Service: {service}</p>
                    
                    
                    <div className="buttons">
                    <button  onClick = { ( )=>editService()} className="btn btn1 btn-secondary" >
                     Edit
                    </button>
                    <button  onClick = { ( )=>deleteService()} className="btn btn1 btn-danger" >
                     Delete
                    </button>
                    </div>
                    
                </div>
            </div> 
        </div>
     );
}
 
export default ServiceItem;