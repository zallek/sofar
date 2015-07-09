import * as ActionTypes from 'constants/ActionTypes';


const initialState = {
  startLocation: null,
  destinationLocations: [],
};

export default function sofar(state = initialState, action) {
  console.log('Sofar Store');
  console.log(action);
  switch (action.type) {

  case ActionTypes.SOFAR_SET_START_LOCATION:
    return {
      ...state,
      startLocation: action.startLocation,
    };

  case ActionTypes.SOFAR_SET_DESTINATION_LOCATIONS:
    return {
      ...state,
      destinationLocations: action.destinationLocations,
    };

  default:
    return state;
  }
}
