import React from 'react';
import Seif from '../Images/seiff.jpg';
import './Employe.css';

const Employe = () => {
    return ( 
        <div>
            <div className="card" style={{width: '13rem;'}}>
                <img src={Seif} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Soltane Seifallah</h5>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                   
                    <button  onClick="{}" className="btn btn-danger" >
                        <i className="fa fa-trash"> </i> Delete
                    </button>
                </div>
            </div> 
        </div>
     );
}
 
export default Employe;