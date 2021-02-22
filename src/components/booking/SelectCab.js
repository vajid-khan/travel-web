import Router from "next/router";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import car from "../../ui/icons/cars/sedan.svg";
import * as actions from "../../store/actions/index";
import BookingFareLoader from "../../ui/loader/BookingFareLoader";

const Map = dynamic(() => 
    import('../Map/Map'),
    {ssr: false}
);

class SelectCab extends React.Component {

    componentDidMount(){
        
        window.scrollTo(0, 0);
        
        this.props.getBookingCabs({
            source: this.props.booking.pickup.co_ordinate,
            destination: this.props.booking.drop.co_ordinate
        });
        
    }

    cabSelectHandler = (event, cab) => {
        event.preventDefault();
        Router.push('/booking-confirm');
    }

    render() {
        return (
            <section className="tj-user-bfrm" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-md-push-6">
                            {
                                this.props.booking.pickup ?
                                    <Map
                                        source={this.props.booking.pickup.co_ordinate}
                                        destination={this.props.booking.drop.co_ordinate}
                                        directions={true}
                                    />
                                    : null
                            }
                        </div>

                        <div className="col-md-6 col-sm-6 col-md-pull-6">
                            <div className="tj-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="active full-width">
                                        <a href="#choose_cab" data-toggle="tab">
                                            Available Cab
                                            <span className="pull-right">
                                                {this.props.distance} KM
                                            </span>    
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row choose-cab-items">
                                {
                                    this.props.loading ?
                                        <BookingFareLoader 
                                            height={130}
                                            count={5}
                                        />
                                    :
                                        <BookingCabFareListing 
                                            cabs={this.props.cabs}
                                            onCabSelect={this.cabSelectHandler}
                                        />
                                }
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        cabs: state.bookingData.cabs,
        booking: state.bookingData.booking,
        distance: state.bookingData.booking.distance,
        loading: state.bookingData.loadingBookingFare,
    }
}

const mapDisptachToProps = dispatch => {
    return {
        getBookingCabs: data => dispatch(actions.getBookingCabs(data)),
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(SelectCab);

const BookingCabFareListing = props => {
    
    const cabs = props.cabs;

    return (
        <React.Fragment>
            <div className="choose-cab-item">
                <a href="#">
                    <div className="col-xs-3 cab-image">
                    </div>
                    <div className="col-xs-3 cab-description">
                        <i className="fa fa-taxi"></i>
                    </div>
                    <div className="col-xs-2 cab-price">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="col-md-3 col-xs-4 cab-price">
                        <i className="fa fa-wallet"></i>
                    </div>
                    <div className="col-md-1 cab-actions pull-right hidden-xs">

                    </div>
                    <div className="clearfix"></div>
                </a>
            </div>
            {
                cabs.map((cab, index) =>
                    <div className="choose-cab-item" key={index}>
                        <a href="#" onClick={(e) => props.onCabSelect(e, cab)}>
                            <div className="col-xs-3 cab-image">
                                <img src={car} />
                            </div>
                            <div className="col-xs-3 cab-description">
                                {cab.name}
                            </div>
                            <div className="col-xs-2 cab-price">
                                2
                            </div>
                            <div className="col-md-3 col-xs-4 cab-price">
                                {cab.min_price}-{cab.max_price}
                            </div>
                            <div className="col-md-1 cab-actions pull-right hidden-xs">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </div>
                )
            }
        </React.Fragment>
    )
}