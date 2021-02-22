import {connect} from "react-redux";
import Auth from "../auth/Auth";
// import Router from "next/router";

const WithAuth = (WrappedComponent)  => {
     class WithAuth extends React.Component {
        
        render(){
            if (!this.props.isAuth) {
                return <Auth/>
                // Router.push('/sign-in');
            }
            return <WrappedComponent {...this.props}/>
        }
    }

    const mapStateToProps = state => {
        return {
            isAuth:state.user.token && state.user.user.first_name
        }
    }
    return connect(mapStateToProps)(WithAuth);
}

export default WithAuth;