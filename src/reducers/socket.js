import {
  INIT,
  PRESENCE
} from '../actions/socket';

// import { loadUserProfile } from '../utils/apiUtils';

const initialState = {}


export default function roster(state = initialState, action) {
  switch (action.type) {
    case INIT:
        return Object.assign({}, state, {
        socket: action.payload,
      });

    case PRESENCE:
      return Object.assign({}, state, {
        presence: action.payload,
      });

    default:
      return state
  }
}
