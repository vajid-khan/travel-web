const { compose, withProps, lifecycle } = require("recompose");
const {
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} = require("react-google-maps");

import carIcon from "../../ui/icons/icons/car_map.png";
import ErrorBoundary from "../errorboundary/ErrorBoundary";

let iconMarker = new window.google.maps.MarkerImage(
    carIcon,
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(42, 42)
);

const MapWithADirectionsRenderer = compose(
    withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withGoogleMap,
    lifecycle({
        
        componentDidMount() {

            if (this.props.directions && this.props.destination) {
                const DirectionsService = new google.maps.DirectionsService();

                DirectionsService.route({
                    origin: new google.maps.LatLng(this.props.source.lat, this.props.source.lng),
                    destination: new google.maps.LatLng(this.props.destination.lat, this.props.destination.lng),
                    travelMode: google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result,
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                });
            }
            
            let markers = [];
            let center = this.props.source;
            if (this.props.source) {
                markers.push({
                    icon: iconMarker,
                    position: this.props.source
                });
            }
            if (this.props.destination) {
                markers.push({
                    icon: iconMarker,
                    position: this.props.destination
                });
            }
            this.setState({
                center:center,
                markers: markers,
                center: new google.maps.LatLng(this.props.source.lat, this.props.source.lng)
            });
        },
        componentDidUpdate(){

            let markers = this.state.markers;

            if (markers && markers[0].position.lat != this.props.source.lat) {
                let marker = {
                    icon: iconMarker,
                    position: this.props.source
                };
                markers[0] = marker;
                this.setState({
                    markers: markers,
                    center: new google.maps.LatLng(this.props.source.lat, this.props.source.lng)
                });
            }
        }
    })
)(props =>
    <ErrorBoundary>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={new google.maps.LatLng(props.source.lat, props.source.lng)}
            center={props.center}
            defaultOptions={{ 
                mapTypeControl: false, 
                streetViewControl: false,
            }}
            >
            {
                props.markers && props.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        icon={marker.icon}
                        draggable={props.draggable}
                        position={marker.position}
                        onDragEnd={props.onAddressChange}
                        animation={ google.maps.Animation.DROP}
                    />
                ))
            }
            {props.directions && <DirectionsRenderer directions={props.directions} options={{suppressMarkers:true}} />}
        </GoogleMap>
    </ErrorBoundary>
);

export default MapWithADirectionsRenderer;