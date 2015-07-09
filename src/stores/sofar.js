import * as ActionTypes from 'constants/ActionTypes';


const initialState = {
  startingPoint: null,
};

export default function sofar(state = initialState, action) {
  switch (action.type) {

  case ActionTypes.SOFAR_SET_STARTING_POSITION:
    return {
      ...state,
      startingPoint: action.position,
    };

  default:
    return state;
  }
}
