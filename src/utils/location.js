
import axios from 'axios'

export const geoLocation = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

export const getAddressFromCoordinate = (lat, lng) => {

    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=AIzaSyAyHRYiEycCxiiEBixPjQ3TRq-gsHXz6N0`)
        .then(response => response.data);
}
