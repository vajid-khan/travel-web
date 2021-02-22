import Router from "next/router";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';
import * as localtionUtils from "../../utils/location";
import DateTimePicker from "../picker/date/DateTimePicker";
import myLocation from "../../ui/icons/icons/my-location.svg";

const AddressPicker = dynamic(() => 
    import('../picker/address/AddressPicker')
);

const Map = dynamic(() => 
    import('../Map/Map'),
    {ssr: false}
);

class BookingForm extends React.Component {

    state = {
        error: {
            pickup: null,
            drop: null,
        },
        fetching_currention_location: false,
        currently_selected_address: 'pickup',
        address_picker_visibility: false,
    }

    componentDidMount() {
        this.fetchCurrentLocation();
    }

    fetchCurrentLocation = () => {

        this.setState({
            fetching_currention_location: true
        });
        
        localtionUtils.geoLocation().then(position => {
            let { latitude, longitude } = position.coords;
            localtionUtils.getAddressFromCoordinate(latitude, longitude)
                .then(address => {
                    
                    this.setState({
                        fetching_currention_location: false
                    });

                    const pickup = {
                        address:{
                            street: address.results[0].formatted_address
                        },
                        co_ordinate: {
                            lat: latitude,
                            lng: longitude,
                        }
                    }
                    this.props.savePickAddress(pickup);
                    
                });
        });
    }

    bookingHandler = (e) => {
        e.preventDefault();

        let error = {};
        if (!this.props.pickup.co_ordinate.lat || !this.props.pickup.co_ordinate.lng) {
            error.pickup = 'Pickup address is required';
        }

        if (!this.props.drop.co_ordinate.lat || !this.props.drop.co_ordinate.lng) {
            error.drop = 'Drop address is required';
        }

        this.setState({
            error: error
        });

        if (!error.pickup && !error.drop) {
            Router.push({
                pathname: '/select-cab',
                query: {
                    source: JSON.stringify(this.props.pickup.co_ordinate),
                    destination: JSON.stringify(this.props.drop.co_ordinate),
                }
            });
        }
    }

    addressChangeHandler = (address, type) => {
        let changeLocation = {};
        if (type == 'pickup') {
            changeLocation = this.props.pickup;
        } else {
            changeLocation = this.props.drop;
        }
        changeLocation.address.street = address.label;
        changeLocation.co_ordinate = address.location;

        let error = { ...this.state.error };
        error[`${type}`] = null;

        this.setState({
            error: error,
            address_picker_visibility: false,
            currently_selected_address: type,
        });

        if (type == 'pickup') {
            this.props.savePickAddress(changeLocation);
        } else {
            this.props.saveDropAddress(changeLocation);
        }
    }

    mapAddressChange = (addressData) => {
        const lat = addressData.latLng.lat();
        const lng = addressData.latLng.lng();
        localtionUtils.getAddressFromCoordinate(lat, lng)
            .then(address => {
                let changeLocation = {};
                if (this.state.currently_selected_address == 'pickup') {
                    changeLocation = this.props.pickup;
                } else {
                    changeLocation = this.props.drop;
                }

                changeLocation.address.street = address.results[0].formatted_address;
                changeLocation.address.co_ordinate = {
                    lat: lat,
                    lng: lng,
                }

                if (this.state.currently_selected_address == 'pickup') {
                    this.props.savePickAddress(changeLocation);
                } else {
                    this.props.saveDropAddress(changeLocation);
                }
            });
    }

    toggleAddressPicker = (selected_address = null) => {
        this.setState( prevState => ({
            address_picker_visibility: !prevState.address_picker_visibility,
            currently_selected_address: selected_address || prevState.currently_selected_address
        }));
    }

    bookingTypeChangeHandler = (type) => {
        this.props.saveBookingType(type)
    }

    bookingDateChangeHandler = (date) => {
        this.props.saveBookingDate(date);
    }

    render() {
        return (
            <React.Fragment>
                <section className="tj-banner-form2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="tj-form2-tabs">
                                    <ul className="nav nav-tabs sm-width-33">
                                        <li className={this.props.booking_type=='one-way'?'active':''}
                                            onClick={() => this.bookingTypeChangeHandler('one-way')}>
                                            <a href="#one-way" data-toggle="tab">One Way</a>
                                        </li>
                                        <li className={this.props.booking_type == 'two-way' ? 'active' : ''} 
                                        onClick={() => this.bookingTypeChangeHandler('two-way')}>
                                            <a href="#two-way" data-toggle="tab">Two Way</a>
                                        </li>
                                        <li className={this.props.booking_type == 'out-station' ? 'active' : ''}
                                        onClick={() => this.bookingTypeChangeHandler('out-station')}>
                                            <a href="#out-station" data-toggle="tab">Out Station</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="one-way">
                                        <form method="POST" className="trip-frm2" onSubmit={this.bookingHandler}>
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <h4>
                                                            Pick Me at
                                                            <span className={this.state.fetching_currention_location ? "blink" : ""} style={{ cursor: 'pointer' }} onClick={this.fetchCurrentLocation}>
                                                                <img className="pull-right" src={myLocation} style={{ width: '20px' }} />
                                                            </span>
                                                        </h4>
                                                        <div className={this.state.error.pickup ? "field-box error-field" : "field-box"}>
                                                            <input
                                                                type="text"
                                                                placeholder="Pickup Locations"
                                                                value={this.props.pickup.address.street}
                                                                onFocus={ () => this.toggleAddressPicker('pickup')}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <div className="col-xs-12">
                                                        <h4>Drop Me at</h4>
                                                        <div className={this.state.error.drop ? "field-box error-field" : "field-box"}>
                                                            <input
                                                                type="text"
                                                                placeholder="Drop Locations"
                                                                value={this.props.drop.address.street}
                                                                onFocus={() => this.toggleAddressPicker('drop')}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <div className="col-md-12 col-sm-12">
                                                        <h4>Ride Time</h4>
                                                        <div className="row">
                                                            <div className="col-xs-12">
                                                                <DateTimePicker
                                                                    minDays={0}
                                                                    maxDays={5}
                                                                    change={this.bookingDateChangeHandler}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <button type="submit" className="search-btn full-width">
                                                            Search Cabs <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-7 col-xs-12 hidden-xs">
                                                {
                                                    this.props.pickup.co_ordinate.lat ?
                                                        <Map
                                                            draggable={true}
                                                            source={this.state.currently_selected_address == 'pickup' ? this.props.pickup.co_ordinate : this.props.drop.co_ordinate}
                                                            onAddressChange={this.mapAddressChange}
                                                        />
                                                    : null
                                                }
                                            </div>
                                            {
                                                this.state.address_picker_visibility && 
                                                <AddressPicker
                                                    close={this.toggleAddressPicker}
                                                    addressChange={this.addressChangeHandler}
                                                    placeholder={'Search ' + this.state.currently_selected_address +' location'}
                                                    addressType={this.state.currently_selected_address}
                                                />
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    // saveBookingData: booking => dispatch(actions.saveBookingData(booking)),
    savePickAddress: address => dispatch(actions.savePickAddress(address)),
    saveDropAddress: address => dispatch(actions.saveDropAddress(address)),
    saveBookingDate: (date) => dispatch(actions.saveBookingDate(date)),
    saveBookingType: type => dispatch(actions.saveBookingType(type)),
});

const mapStateToProps = state => {
    const booking = state.bookingData.booking;
    return {
        booking_type: booking.type,
        pickup: booking.pickup,
        drop: booking.drop,
        date: booking.date,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingForm);
