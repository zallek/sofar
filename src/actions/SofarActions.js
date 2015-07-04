import * as ActionTypes from 'constants/ActionTypes';
import Geolocation from 'utils/Geolocation';


export function setStartingPosition(position) {
  return {
    type: ActionTypes.SOFAR_SET_STARTING_POSITION,
    position,
  };
}

export function geolocate() {
  return (dispatch) => {
    Geolocation.getCurrentPosition((position) => {
      position = position.coords;
      let { latitude, longitude } = position;
      dispatch(setStartingPosition({
        label: `Latitude: ${latitude} Longitude: ${longitude}`,
        position,
      }));
    }); //@TODO handle fail case
  };
}
