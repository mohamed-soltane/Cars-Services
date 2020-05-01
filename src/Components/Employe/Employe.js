import React from 'react';
import Seif from '../../Images/seiff.jpg';
import './Employe.css';

const Employe = () => {
    return ( 
        <div>
            <div className="card" style={{width: '13rem;'}}>
                <img src={Seif} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Soltane Seifallah</h5>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                    <p className="card-text mb-0">Reviews</p>
                   
                    <button  onClick="{}" className="btn btn-primary" >
                     Add Reviews
                    </button>
                </div>
            </div> 
        </div>
     );
}
 
export default Employe;