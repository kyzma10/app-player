import {FETCH_SONG_REQUEST, FETCH_SONG_SUCCESS, FETCH_SONG_FAILURE} from '../action/types';

const initialState = {
    trackList: null,
    isLoading: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SONG_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SONG_SUCCESS:
            return {
                ...state,
                trackList: action.payload.data.data
            };

        case FETCH_SONG_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}