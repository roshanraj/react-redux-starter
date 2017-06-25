import {
  GET_ROSTER,
  UPDATE_ROSTER,
} from '../actions/roster';

// import { loadUserProfile } from '../utils/apiUtils';

const initialState = [

]


export default function roster(state = initialState, action) {

  switch (action.type) {
    case GET_ROSTER:
      return [
        state
      ]

    case UPDATE_ROSTER:

      return [
        ...action.roster
      ]

    default:
      return state
  }
}
