import BookingStep from "../booking/BookingStep";
import HomeBanner from "../banner/HomeBanner";
import BookingForm from "../../components/booking/BookingForm";

const Home = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <BookingForm />
            <BookingStep />
        </React.Fragment>
    );
}

export default Home;