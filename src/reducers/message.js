import {
    GET_MESSAGE,
    SET_MESSAGE,
    GET_MESSAGES,
    SET_MESSAGES
} from '../actions/message';

// import { loadUserProfile } from '../utils/apiUtils';

const initialState = {
        killer:{
            name:"killer",
            msg:"same here"
        },
        killer2:{
            name:"killer 2",
            msg:"same here backup"
        }
    };

export default function messages(state = initialState, action) {

    switch (action.type) {
        case SET_MESSAGE:
            return state
            break;
        case GET_MESSAGE:
            return Object.assign({}, state, {alerts: action.payload});
            break;
        case SET_MESSAGES:
            return Object.assign({}, state, {alerts: action.payload});
            break;
        case GET_MESSAGES:
            return Object.assign({}, state, {alerts: action.payload});
            break;

        default:
            return state
    }
}
