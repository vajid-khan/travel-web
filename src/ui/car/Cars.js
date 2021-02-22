const cars = () => {
    return (
        <section className="tj-cab-filter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="tj-heading-style">
                            <h3>Our Car Fleet</h3>
                        </div>
                        <nav className="cab-filter-nav">
                            <a href="#" data-filter="*" className="current">All</a>
                            <a href="#" data-filter=".audi">Audi</a>
                            <a href="#" data-filter=".benz">Benz</a>
                            <a href="#" data-filter=".bmw">BMW</a>
                            <a href="#" data-filter=".volvo">Volvo</a>
                            <a href="#" data-filter=".zetta">Zetta</a>
                        </nav>
                    </div>
                    <div className="cab-filter">
                        <div className="audi bmw zetta col-md-4 col-sm-4 col-xs-12">
                            <div className="cab-box">
                                <figure>
                                    <img src="images/isotope_img1.jpg" alt="" />
                                </figure>
                                <div className="cab-desc">
                                    <strong className="cab-price">$190 <span>/ day</span></strong>
                                    <h4>Mercedes Benz Z-Series</h4>
                                    <ul className="cab-meta">
                                        <li><i className="fas fa-taxi"></i>Luxery</li>
                                        <li><i className="fas fa-user-circle"></i>2 Passengers</li>
                                        <li><i className="fas fa-tachometer-alt"></i>5.6/100 MPG</li>
                                    </ul>
                                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="benz zetta bmw volvo col-md-4 col-sm-4 col-xs-12">
                            <div className="cab-box">
                                <figure>
                                    <img src="images/isotope_img2.jpg" alt="" />
                                </figure>
                                <div className="cab-desc">
                                    <strong className="cab-price">$230 <span>/ day</span></strong>
                                    <h4>Mercedes Benz Sedan</h4>
                                    <ul className="cab-meta">
                                        <li><i className="fas fa-taxi"></i>Luxery</li>
                                        <li><i className="fas fa-user-circle"></i>2 Passengers</li>
                                        <li><i className="fas fa-tachometer-alt"></i>7.5/100 MPG</li>
                                    </ul>
                                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="benz volvo audi zetta col-md-4 col-sm-4 col-xs-12">
                            <div className="cab-box">
                                <figure>
                                    <img src="images/isotope_img3.jpg" alt="" />
                                </figure>
                                <div className="cab-desc">
                                    <strong className="cab-price">$160 <span>/ day</span></strong>
                                    <h4>Mercedes Benz Van</h4>
                                    <ul className="cab-meta">
                                        <li><i className="fas fa-taxi"></i>Luxery</li>
                                        <li><i className="fas fa-user-circle"></i>8 Passengers</li>
                                        <li><i className="fas fa-tachometer-alt"></i>6.6/100 MPG</li>
                                    </ul>
                                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default cars;