import Link from "next/link";

const BookingStep = () => {
    return (
        <React.Fragment>
            <section className="tj-cal-to-action">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="cta-box">
                                    <img src="/static/images/cta-icon1.png" alt=""/>
                                    <div className="cta-text">
                                        <strong>Best Price Guaranteed</strong>
                                        <p>A more recently with desktop softy  like aldus page maker.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="cta-box">
                                    <img src="/static/images/cta-icon2.png" alt=""/>
                                    <div className="cta-text">
                                        <strong>24/7 Customer Care</strong>
                                        <p>A more recently with desktop softy  like aldus page maker.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="cta-box">
                                    <img src="/static/images/cta-icon3.png" alt=""/>
                                    <div className="cta-text">
                                        <strong>Easy Bookings</strong>
                                        <p>A more recently with desktop softy  like aldus page maker.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-book-services" style={{marginTop:'20px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="tj-heading-style">
                                    <h3>Get Booking in 3 Steps</h3>
                                    <p>Lorem Ipsum passages, and more recently with desktop publishing</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="service-box">
                                    <div className="icon-outer">
                                        <span>01</span>
                                        <i className="far fa-edit"></i>
                                    </div>
                                    <div className="service-caption">
                                        <h3>Make Reservation</h3>
                                        <p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
                                        <Link href="/booking">
                                            <a>
                                                Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="service-box">
                                    <div className="icon-outer">
                                        <span>02</span>
                                        <i className="fas fa-taxi"></i>
                                    </div>
                                    <div className="service-caption">
                                        <h3>Vehicle Confirmation</h3>
                                        <p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
                                        <Link href="/booking">
                                            <a>
                                                Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="service-box">
                                    <div className="icon-outer">
                                        <span>03</span>
                                        <i className="far fa-thumbs-up"></i>
                                    </div>
                                    <div className="service-caption">
                                        <h3>Enjoy your Trips</h3>
                                        <p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
                                        <Link href="/booking">
                                            <a>
                                                Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    );
}

export default BookingStep;