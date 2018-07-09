import {
    TRACK_NEXT,
    TRACK_PREV,
    TRACK_SHUFFLE
} from '../types/tracksTypes';


const prevTrack = (id) => {
    return function (dispatch) {
        dispatch({type: TRACK_PREV,
        payload: id})
    }
};

