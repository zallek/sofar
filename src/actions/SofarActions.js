import * as ActionTypes from 'constants/ActionTypes';
import Geolocation from 'utils/Geolocation';
import * as Destinations from 'mocks/DestinationsMock';


export function setStartLocation(startLocation) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SOFAR_SET_START_LOCATION,
      startLocation,
    });
    dispatch(computeDestinationLocations(startLocation.coords));
  };
}

export function geolocate() {
  return (dispatch) => {
    Geolocation.getCurrentPosition((position) => {
      let coords = position.coords;
      let { latitude, longitude } = coords;
      dispatch(setStartLocation({
        label: `Latitude: ${latitude} Longitude: ${longitude}`,
        coords,
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
