import { connect } from "react-redux"; 
import * as actions from "../../store/actions/index";
import SmallLoader from "../../ui/loader/SmallLoader";
import WithAuth from "../hoc/WithAuth";

class Profile extends React.Component {
	
	state = {
		user: this.props.user,
		errors:[]
	}

	componentDidUpdate(){
		if (this.state.user != this.props.user) {
			this.setState({ user: this.props.user });
		}
	}

	handleChange = (e , input) => {
		let value = e.target.value;
		let user = {...this.state.user};
		user[input] = value;

		this.setState({user:user});
	}

	handleProfileUpdate = (e) => {
		e.preventDefault();

		this.props.profileUpdate(this.state.user);
	}

    render(){

		const user = this.state.user;

        return (
            <section className="tj-user-bfrm" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active full-width text-capitalize">
                                        <a href="#profile" data-toggle="tab">
											{user.first_name}'s Profile
										</a>
                                    </li>
                                </ul>
							</div>
							
                            <div className="tab-content">
                                <div className="tab-pane active" id="profile">
                                    <form className="account-frm full-width" onSubmit={this.handleProfileUpdate}>
										<div className="col-md-6 col-sm-6">
											<div className="account-field">
												<label>First Name</label>
												<span className="far fa-user"></span>
												<input 
													type="text"
													value={user.first_name}
													onChange={(e) => this.handleChange(e, 'first_name')}
													placeholder="Enter First Name"
												/>
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="account-field">
												<label>Last Name</label>
												<span className="far fa-user"></span>
												<input 
													type="text"
													value={user.last_name}
													onChange={(e) => this.handleChange(e, 'last_name')}
													placeholder="Enter Last Name"
												/>
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="account-field">
												<label>Phone</label>
												<span className="icon-phone icomoon"></span>
												<input 
													type="tel"
													value={user.phone}
													onChange={(e) => this.handleChange(e, 'phone')}
													placeholder="Enter Phone Number"
												/>
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="account-field">
												<label>Email</label>
												<span className="far fa-envelope"></span>
												<input 
													type="email"
													value={user.email}
													onChange={(e) => this.handleChange(e, 'email')}
													placeholder="Enter Email id"
												/>
											</div>
										</div>
										<div className="col-md-4 col-sm-4">
											<div className="account-field">
												<label>Old Password</label>
												<span className="fas fa-lock"></span>
												<input 
													type="password"
													onChange={(e) => this.handleChange(e, 'current_password')}
													placeholder="Current Password"
												/>
											</div>
										</div>
										<div className="col-md-4 col-sm-4">
											<div className="account-field">
												<label>New Password</label>
												<span className="fas fa-lock"></span>
												<input 
													type="password"
													onChange={(e) => this.handleChange(e, 'new_password')}
													placeholder="New Password"
												/>
											</div>
										</div>
										<div className="col-md-4 col-sm-4">
											<div className="account-field">
												<label>Confirm Password</label>
												<span className="fas fa-lock"></span>
												<input
													type="password"
													onChange={(e) => this.handleChange(e, 'confirm_password')}
													placeholder="Confirm Password"
												/>
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<div className="account-field">
												<label>Profile Image</label>
												<button className="file-btn">
													<i className="fas fa-download"></i> Upload Photo
												</button>
												<span className="limit">Maximum file size : 6MB </span>
											</div>
										</div>
										<div className="col-md-6 col-sm-6">
											<button type="submit" className="save-btn">
												Save
												{
													this.props.processing ?
														<SmallLoader/>
													:
													<i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
												}
											</button>
										</div>
									</form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
	return {
		user: state.user.user,
		processing: state.user.processing,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		profileUpdate: data => dispatch(actions.profileUpdate(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Profile));