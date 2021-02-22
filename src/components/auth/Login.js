import { connect } from "react-redux";
import SmallLoader from "../../ui/loader/SmallLoader";
import * as actions from "../../store/actions/index";

class Login extends React.Component {

    state = {
        credentials: {
            email: '',
            password: '',
        }, 
        error: {
            serverError: this.props.serverError,
        }
    }

    handleLogin = (e) => {
        e.preventDefault();

        let error = {...this.state.error};
        error.email = null;
        error.password = null;

        if (!this.state.credentials.email || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.credentials.email))) {
            error.email = "Invalid Email address";
        }

        if (!this.state.credentials.password) {
            error.password = "Password is required";
        }

        if (error.email || error.password) {
            this.setState({error: error});
        } else {
            this.props.login(this.state.credentials);
        }
    }

    handleChange = (e, type) => {
        let value = e.target.value;
        let credentials = {...this.state.credentials};
        credentials[`${type}`] = value;
        this.setState({credentials:credentials});
    }

    render() {
        return (
            <form className="login-frm full-width" method="POST" onSubmit={this.handleLogin}>
                <div className="visible-xs">
                    <br/>
                </div>
                <div className="form-box">
                    <div className="form_desc">
                        <h3>
                            Login to your account
                        </h3>
                    </div>

                    <div className="clearfix"></div>
                    <div className={this.state.error.email ? "field-holder error-field" : "field-holder"}>
                        <span className="far fa-envelope"></span>
                        <input type="email"
                            value={this.state.credentials.email}
                            onChange={(e) => this.handleChange(e, 'email')}
                            placeholder="Enter your Email Address"
                        />
                    </div>
                    <div className={this.state.error.password ? "field-holder error-field" : "field-holder"}>
                        <span className="fas fa-lock"></span>
                        <input type="password"
                            value={this.state.credentials.password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            placeholder="Password"
                        />
                    </div>
                    <span style={{height:'14px', display:'block'}} className="text-danger">
                        {this.props.serverError}
                    </span>
                    <a href="#" className="forget-pass">Forget Password?</a>
                    <button type="submit" className="reg-btn">
                        Login
                        {
                            this.props.processing ?
                                <SmallLoader />
                                :
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        }
                    </button>
                </div>
            </form>
        )

    }
}

const mapStateToProps = state => {
    return {
        processing: state.user.auth_processing,
        serverError: state.user.error.login_error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: credentials => dispatch(actions.loginUser(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);