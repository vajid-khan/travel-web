import Link from "next/link";

const Footer = () => {
    return (
        <React.Fragment>
            <section className="tj-cal-to-action2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-9">
                            <div className="cta-tagline">
                                <h2>Incredible Destinations at Incredible Deals</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="cta-btn">
                                <Link href="/booking">
                                    <a>
                                        Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tj-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-info widget">
                                <h3>Contact Info</h3>
                                <ul className="contact-box">
                                    <li>
                                        <i className="fas fa-home" aria-hidden="true"></i>
                                        10A, PrimeCab, San Andreno, United States.
                                    </li>
                                    <li>
                                        <i className="far fa-envelope-open"></i>
                                        <a href="mailto:primecab@booking.com">
                                            primecab@booking.com</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-square"></i>
                                        +1-333-444-555
                                    </li>
                                    <li>
                                        <i className="fas fa-globe-asia"></i>
                                        <a href="www.primecab.com">www.primecab.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 pull-right">
                            <div className="about-widget widget">
                                <h3>About PrimeCab</h3>
                                <p>Search for will uncover many web sites variables onto of passages of lorem ipsum available but the majority the words all predefined humour to met chunks recently with desktop.</p>
                                <ul className="fsocial-links">
                                    <li><a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="http://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="http://www.pinterest.com"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                            <div className="copyright_text">
                                <p>&copy; Copyrights 2018 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Footer;