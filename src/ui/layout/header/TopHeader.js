import MainLoader from '../../loader/MailLoader';

const TopHeader = () => {
    return (
        <React.Fragment>
            {/* <MainLoader /> */}
            <div className="container hidden-xs hidden-sm">
                <div className="row">
                    <div className="col-md-3 col-xs-12 col-sm-4">
                        <div className="tj-logo">
                            <h1><a href="home-1.html">Prime Cab</a></h1>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-4">
                        <div className="info_box">
                            <i className="fa fa-home"></i>
                            <div className="info_text">
                                <span className="info_title">Address</span>
                                <span>Primecab, United States</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12 col-sm-4">
                        <div className="info_box">
                            <i className="fa fa-envelope"></i>
                            <div className="info_text">
                                <span className="info_title">Email Us</span>
                                <span><a href="mailto:primecab@booking.com">primecab@booking.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <div className="phone_info">
                            <div className="phone_icon">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="phone_text">
                                <span>
                                    <a href="tel:1-234-000-2345">+1-234-000-2345</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopHeader;