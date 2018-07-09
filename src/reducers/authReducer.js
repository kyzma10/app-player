import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "../types/authTypes";

const initialState = {
    isLoading: false,
    isAuthenticate: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type){
        case AUTH_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticate: action.payload
            };

        case AUTH_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }


}