import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import withAuth from "../hoc/WithAuth";
import BookingSummary from "../../ui/booking/bookingSummary";

class Payment extends React.Component {

    paymentHandler = (e) => {
        e.preventDefault();
        Router.push('/booking-success');
    }

    render() {
        return (
            <section className="tj-payment">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active"><a href="#payment" data-toggle="tab">Payment Method</a></li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="payment">
                                    <form className="payment-frm" method="POST" onSubmit={this.paymentHandler}>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="payment-field">
                                                <label for="bank_wire">
                                                    <input type="radio" name="payment_type" id="bank_wire" />Direct Bank Transfer
                                                </label>
                                                <p>Lorem Ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of all the Lorem Ipsum generators on thet Internet tends to repeat predefined chunks as necessary, making this an web evolved over the years.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="payment-field">
                                                <label for="credit_card">
                                                    <input type="radio" name="payment_type" id="credit_card" />  Credit Card
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="payment-field">
                                                <label for="cash">
                                                    <input type="radio" name="payment_type" id="cash" />Cash Payment
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="payment-field">
                                                <label for="paypal">
                                                    <input type="radio" name="payment_type" id="paypal" />PayPal
                                                </label>
                                                <img src="images/payment.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <Link href="/booking">
                                                <a className="back-btn">
                                                    <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                                    Go Back
                                                </a>
                                            </Link>
                                            <button type="submit" className="book-btn">
                                                Book Now <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.token != null,
        user: state.user.user || {},
    }
}

export default connect(mapStateToProps)(withAuth(Payment));