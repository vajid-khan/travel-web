import BookingStep from "../booking/BookingStep";
import BookingForm from "../../components/booking/BookingForm";

class Booking extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="tj-booking-frm">
                    <div className="container">
                        <div className="row">
                            <br />
                            <BookingForm />
                        </div>
                    </div>
                </section>
                <BookingStep />
            </React.Fragment>

        );
    }
}

export default Booking;