import { connect } from "react-redux";

const BookingSummary = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-4 col-sm-4">
                <div className="booking-summary">
                    <h3>Booking Summary</h3>
                    <br />
                    <div className="journey-info">
                        <h4>{props.booking.type} Journey</h4>
                    </div>
                    <ul className="service-info">
                        <li>
                            <span><strong>Pickup:</strong> </span>
                            {props.booking.pickup.address.street}
                        </li>
                        <li>
                            <span><strong>Drop:</strong></span>
                            {props.booking.drop.address.street}
                        </li>
                        <li>
                            <span><strong>Time:</strong> </span>
                            {props.booking.date}
                        </li>
                        <li>
                            <span><strong>Fare Details:</strong></span>
                        </li>
                        <li>
                            <span><strong>Basic Amount:</strong></span>
                            $ {props.booking.basic_fare}
                        </li>
                    </ul>
                    <div className="fare-box">
                        <strong>Total Fare:
                            <span>${props.booking.total_fare}</span>
                        </strong>
                        <span>( inclusive of All Taxes )</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        booking: state.bookingData.booking,
    }
}

export default connect(mapStateToProps)(BookingSummary)