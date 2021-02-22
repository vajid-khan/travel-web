import React from 'react';
import Auxiliary from '../auxiliary/Auxiliary';

const PaymentBanner = () => {

    return (
        <Auxiliary>
            <div className="tj-inner-banner">
                <div class="container">
                    <h2>Payment</h2>
                </div>
            </div>

	    	<div className="tj-breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><a href="home-1.html">Home</a></li>
                        <li><a href="booking-form.html">Booking Form</a></li>
                        <li><a href="confirm-booking.html">Confirm Booking</a></li>
                        <li className="active">Payment</li>
                    </ul>
                </div>
            </div>
        </Auxiliary>
    );
}

export default PaymentBanner;
