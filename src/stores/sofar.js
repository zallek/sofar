import * as ActionTypes from 'constants/ActionTypes';
import { DEFAULT_MAP_CENTER } from 'config';


const initialState = {
  startingPoint: DEFAULT_MAP_CENTER,
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
