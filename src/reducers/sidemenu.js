import {
    CONTENT,
    SWITCH
} from '../actions/sidemenu';

const initialState = {

        active:false,
        activeIndex:0
}

export default function alert(state = initialState, action) {

    switch (action.type) {

        case CONTENT:
            return {

                active: action.active
            }
            break;

        case SWITCH:
            return {

                activeIndex: action.switch
            }
            break;

        default:
            return state
    }
}
