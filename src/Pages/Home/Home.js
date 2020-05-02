import React from 'react';
import Logo from '../../Images/logo.jpg';
import './Home.css';


const Home = () => {
    return ( 
        <React.Fragment>
        <div className="home-body">
           <img className="imag"  src={Logo} alt=""/>
        </div>
        <div className="pub">
            <p className="appointment">Schedule an appointment below or call to see how eStop can help ensure your  vehicle continues running strong.</p>
        </div>
        </React.Fragment>
     );
}
 
export default Home;