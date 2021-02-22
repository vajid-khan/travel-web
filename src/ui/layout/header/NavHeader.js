import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import SmallLoader from "../../loader/SmallLoader";
import * as actions from "../../../store/actions/index";

class NavHeader extends React.Component {

    constructor(props) {
        super(props);
        Router.events.on("routeChangeComplete", this.navigationEnded);
    }

    navigationEnded = () => {
        if (this.closeNavBtn && !this.closeNavBtn.classList.contains('collapsed')) {
            this.closeNavBtn.click();
        }
    }

    componentDidMount() {
        this.props.checkAuth()
    }

    componentDidUpdate(){
        if (this.props.isAuth == false && window.location.pathname != '/sign-in') {
            Router.replace('/');
        }
    }
    
    render(){
        return (
            <header className="tj-header">
                <div className="tj-nav-row sticky">
                    <div className="container">
                        <div className="row">
                            <div className="tj-nav-holder">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <div className="">
                                            <div className="visible-xs col-xs-8 nav-title-container">
                                                <span>
                                                    prime cab
                                                </span>
                                            </div>
                                            <div className="col-xs-4">
                                                <button
                                                    ref={closeNavBtn => this.closeNavBtn = closeNavBtn}
                                                    type="button"
                                                    className="navbar-toggle collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#tj-navbar-collapse"
                                                    aria-expanded="false"
                                                >
                                                    <span className="sr-only">Menu</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse" id="tj-navbar-collapse">
                                        <ul className="nav navbar-nav">
                                            <li>
                                                <Link href="/">
                                                    <a>
                                                        Home
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a>
                                                        Contact
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    <a>
                                                        About
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="visible-xs">
                                                <Link href="/booking">
                                                    <a>
                                                        Book Now
                                                    </a>
                                                </Link>
                                            </li>
                                            {
                                            this.props.isAuth ?
                                                <React.Fragment>
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                            {this.props.userName}
                                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <Link href="/profile">
                                                                    <a>
                                                                        Profile
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/my-bookings">
                                                                    <a>
                                                                        My Bookings
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a style={{cursor:'pointer'}} onClick={() => this.props.logout()}>
                                                            Logout
                                                            {
                                                                this.props.logging_out ?
                                                                <SmallLoader/>
                                                                :
                                                                null
                                                            }
                                                        </a>
                                                    </li>
                                                </React.Fragment>
                                                :
                                                <li>
                                                    <Link href="/sign-in">
                                                        <a>
                                                            Login / Sign Up
                                                        </a>
                                                    </Link>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </nav>
                                <div className="book_btn">
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
            </header>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        isAuth: state.user.token != null,
        userName: state.user.token ? state.user.user.first_name : '',
        logging_out: state.user.auth_processing,
    }
}

const mapDisptachToProps = disptach => {
    return {
        checkAuth: () => disptach(actions.checkAuth()),
        logout: () => disptach(actions.logout()),
    }
}

export default connect(mapStateToProps,mapDisptachToProps)(NavHeader);