import Login from "./Login";
import Router from "next/router";
import Register from "./Register";
import { connect } from "react-redux";
import RegisterBanner from "../../ui/banner/RegisterBanner";

class Auth extends React.Component {

    componentDidMount(){
        this.authRedirect();
    }

    componentDidUpdate(){
        this.authRedirect();
    }

    authRedirect = () => {
        try {
            if (this.props.isAuth) {
                if (this.props.booking.pickup.address.street.length != 0
                        && this.props.booking.drop.address.street.length != 0) {
                    Router.replace('/booking-confirm');
                }  else {
                    Router.replace('/profile');
                }
            } else {
                Router.replace('/sign-in');
            }
        } catch (error) {
            Router.replace('/');
        }
    }

    render() {
        return (
            <React.Fragment>
                <RegisterBanner />
                <section className="tj-login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                {/* <div className="tj-tabs">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="active">
                                            <a href="#login" data-toggle="tab">Login or Sign up</a>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <div className="tab-content">
                                    <div className="tab-pane active" id="login"> */}
                                        <div className="col-md-5 col-sm-5 col-xs-12">
                                            <Login/>
                                        </div>
                                        <div className="col-md-2 col-sm-12 col-xs-12">
                                            
                                            <div className="visible-xs">
                                                <hr/>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <Register/>
                                        </div>
                                    {/* </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.token != null,
        booking: state.bookingData.booking || {},
    }
}
export default connect(mapStateToProps)(Auth);