import React from 'react';
import Auxiliary from '../auxiliary/Auxiliary';

const AboutusBanner = () => {
    return(
        <Auxiliary>
            <div className="tj-inner-banner">
                <div className="container">
                    <h2>Aboutus</h2>
                </div>
            </div>
            <div className="tj-breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><a href="home-1.html">Home</a></li>
                        <li className="active">Aboutus</li>
                    </ul>
                </div>
            </div>
        </Auxiliary>
    );
}

export default AboutusBanner;