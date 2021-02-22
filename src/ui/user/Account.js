import Profile from "../../components/user/Profile";

export default () => {
    return (
        <React.Fragment>
            <section className="tj-account-frm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active">
                                        <a href="#user_account" data-toggle="tab">
                                            <i className="far fa-user"></i> My Account
                                            </a>
                                        </li>
                                    <li>
                                        <a href="#booking" data-toggle="tab">
                                            <i className="far fa-chart-bar"></i> Booking History
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane active" id="user_account">
                                    <Profile/>
                                </div>
                                <div className="tab-pane" id="booking">
                                    Bookings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}