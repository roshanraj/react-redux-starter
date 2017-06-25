import {
    INFO,
    MESSAGE,
    LOADER,
    ERROR,
    SOUND
} from '../actions/alert';

// import { loadUserProfile } from '../utils/apiUtils';

const initialState = {

}


export default function alert(state = initialState, action) {

    switch (action.type) {
        case INFO:
            return {
                color: action.color
            }
            break;
        case MESSAGE:
            return {

                color: action.color
            }
            break;
        case LOADER:
            return {

                color: action.color
            }
            break;
        case ERROR:

            return {
                color: action.color
            }
            break;
        case SOUND:

            return {
                color: action.color
            }
            break;

        default:
            return state
    }
}
