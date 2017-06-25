import {
    AUTH
   } from '../actions/auth';

// import { loadUserProfile } from '../utils/apiUtils';

const initialState = {
    isAuth : false,
    orgName: "",
    userId : "",
    email: "",
    name: "",
    pic: "",
    status: 0,
}

export default function auth(state = initialState, action) {

    switch (action.type) {
        case AUTH:
            window.beats ={
                isActive : action.isAuth,
            }
            return {

                isAuth: action.isAuth,
                orgName: action.orgName,
                userId: action.userId,
                email: action.email,
                name: action.name,
                pic: action.pic,
                status: action.status,
            }
            break;


        default:
            return state
    }
}
