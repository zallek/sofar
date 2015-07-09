import * as ActionTypes from 'constants/ActionTypes';
import Geolocation from 'utils/Geolocation';
import * as Destinations from 'mocks/DestinationsMock';


export function setStartLocation(startLocation) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SOFAR_SET_START_LOCATION,
      startLocation,
    });
    dispatch(computeDestinationLocations(startLocation.location));
  };
}

export function geolocate() {
  return (dispatch) => {
    Geolocation.getCurrentPosition((position) => {
      let location = position.coords;
      let { latitude, longitude } = location;
      dispatch(setStartLocation({
        label: `Latitude: ${latitude} Longitude: ${longitude}`,
        location,
      }));
    }); //@TODO handle fail case
  };
}

export function computeDestinationLocations(startingPoint) {
  return {
    type: ActionTypes.SOFAR_SET_DESTINATION_LOCATIONS,
    destinationLocations: Destinations.computeDestinationLocations(startingPoint),
  };
}
