import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';



function Footer(props) {
    return (
        <div className="site-footer">
            
                <div className="row">             
                    <div className="links col-4 col-sm-2 offset-1">
                        <h5 classeName="h5_footer">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className=" social col-6 col-sm-3 text-center">
                        <h5 classeName="h5_footer">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="contact col-sm-4 text-center">
                             <h5 classeName="h5_footer">Call or Email us at</h5>
                        <a role="button" className="btn " href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn " href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        
    )
}

export default Footer;