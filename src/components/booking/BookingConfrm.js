import Link  from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import BookingSummary from "../../ui/booking/bookingSummary";
import withAuth from "../hoc/WithAuth";

class ConfirmBooking extends React.Component {

    bookingConfirmHandler = (e) => {
        e.preventDefault();
        Router.push('/payment');
    }

    render() {
        return (
            <section className="tj-user-bfrm" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active">
                                        <a href="#confirm_booking" data-toggle="tab">Confirm Booking</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="confirm_booking">
                                    <form className="cb-frm" method="POST" onSubmit={this.bookingConfirmHandler}>
                                        <div className="col-md-6">
                                            <div className="info-field">
                                                <label>Name</label>
                                                <span className="far fa-user"></span>
                                                <input type="text"
                                                    value={this.props.user.first_name}
                                                    placeholder="Enter Full Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="info-field">
                                                <label>Phone</label>
                                                <span className="fa fa-phone"></span>
                                                <input type="tel"
                                                    value={this.props.user.phone}
                                                    placeholder="Enter Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info-field">
                                                <label>Enter OTP</label>
                                                <span className="fa fa-lock"></span>
                                                <input type="text"
                                                    placeholder="Enter OTP"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="submit" className="full-width book-btn">
                                                Verify
                                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <BookingSummary/>

                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user || {},
    }
}

export default connect(mapStateToProps, null)(withAuth(ConfirmBooking));