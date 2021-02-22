import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import SmallLoader from "../../ui/loader/SmallLoader";

class Register extends React.PureComponent {
    
    state = {
        user:{},
        error: {},
    }

    handleChange = (e, input) => {
        let user = {...this.state.user};
        user[input] = e.target.value;
        this.setState({user:user});
    }

    handleCheckUniqueEmail = e => {
        let email = e.target.value;
        if (email) {
            this.props.checkUniqueEmail(email);
        }    
    }

    handleRegister = e => {
        e.preventDefault();

        let error = {};

        if (!this.state.user.email || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.user.email))) {
            error.email = "Invalid Email address";
        }

        if (!this.state.user.password) {
            error.password = "Password is required";
        }

        if (!this.state.user.name) {
            error.name = "Name is required";
        }

        if (error.name || error.email || error.password) {
            this.setState({error: error});
        } else {
            this.props.registerUser(this.state.user);
        }

    }
    
    render() {
        return (
            <form className="reg-frm full-width" onSubmit={this.handleRegister}>
                <div className="form-box">
                    <div className="form_desc">
                        <h3>
                            Create your account
                        </h3>
                    </div>
                
                    <div className="clearfix"></div>
                    <div className={this.state.error.name ? "field-holder error-field" : "field-holder"}>
                        <span className="far fa-user"></span>
                        <input type="text"
                            onChange={(e) => this.handleChange(e, 'name')}
                            placeholder="Username"
                        />
                    </div>
                    <div className={this.state.error.email || this.props.unique_email_error ? "field-holder error-field" : "field-holder"}>
                        <span className="far fa-envelope"></span>
                        <input type="email"
                            onBlur={this.handleCheckUniqueEmail}
                            onChange={(e) => this.handleChange(e, 'email')}
                            placeholder="Enter your Email Address"
                        />
                        <span className="text-danger">
                            {this.props.unique_email_error}                            
                        </span>
                    </div>
                    <div className={this.state.error.password ? "field-holder error-field" : "field-holder"}>
                        <span className="fas fa-lock"></span>
                        <input type="password"
                            onChange={(e) => this.handleChange(e, 'password')}
                            placeholder="Password"
                        />
                    </div>
                    <label htmlFor="terms">
                        <input type="checkbox"
                            onChange={(e) => this.handleChange(e, 't_and_c')}
                        />
                        I accept terms & conditions
                </label>
                    <button type="submit" className="reg-btn">
                        Signup
                        {
                            this.props.auth_processing ?
                                <SmallLoader />
                                :
                                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        }
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        unique_email_error: state.user.error.unique_email,
        processing: state.user.processing,
        auth_processing: state.user.auth_processing,
    }
}

const mapDispatchToProps = disptach => {
    return {
        checkUniqueEmail: email => disptach(actions.checkUniqueEmail(email)),
        registerUser: data => disptach(actions.registerUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);