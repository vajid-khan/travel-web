import React from 'react';
import Auxiliary from '../auxiliary/Auxiliary';

const BookingBanner = () => {
    return (
        <Auxiliary>
            <div className="tj-inner-banner">
                <div className="container">
                    <h2>Confirm Booking</h2>
                </div>
            </div>
        	<div className="tj-breadcrumb">
                <div className="container">
                    <ul className="breadcrumb-list">
                        <li><a href="home-1.html">Home</a></li>
                        <li><a href="booking-form.html">Booking Form</a></li>
                        <li className="active">Confirm Booking</li>
                        <li><a href="payment.html">Payment</a></li>
                    </ul>
                </div>
            </div>
        </Auxiliary>
    );
}

export default BookingBanner;