import withAuth from "../hoc/WithAuth";

class BookingSuccess extends React.Component {

    render() {
        return (
            <section className="tj-payment" id="success-payment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="success-msg">
                                <span className="fas fa-check"></span>
                                <h3>Payment Successfull!</h3>
                                <p>Your payment of $460.00 to PrimeCabs ID:PR12345670 has been  proceeded Successfully!.We’ll send you a confirmation Email shortly.</p>
                                <a href="https://themesjungle.net/html/prime-cab/home-1.html"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to Home</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="booking-summary">
                                <h3>Booking Summary</h3>
                                <ul className="booking-info">
                                    <li><span>Booking Reference: </span>PRIM00023</li>
                                    <li><span>Journey Type: </span>One Way</li>
                                    <li><span>Distance & Time: </span>2,522 km &         23 hours 7 mins</li>
                                    <li><span>One Way Fare: </span>$450</li>
                                </ul>
                                <div className="journey-info">
                                    <h4>One Way Journey</h4>
                                    <i className="far fa-edit"></i>
                                </div>
                                <ul className="service-info">
                                    <li><span>From: </span>San Francisco, USA</li>
                                    <li><span>To: </span>New York, USA</li>
                                    <li><span>Pickup Date: </span>20-05-2017</li>
                                    <li><span>Pickup Time: </span>02.30PM</li>
                                    <li><span>Fare Details: </span>Basic Amount: $450.00</li>
                                </ul>
                                <div className="fare-box">
                                    <strong>Total Fare: <span>$450.00</span></strong>
                                    <span>( inclusive of All Taxes )</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default withAuth(BookingSuccess);