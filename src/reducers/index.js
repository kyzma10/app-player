import {combineReducers} from 'redux';
import trackReducer from './tracksReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    tracks: trackReducer,
    player: playerReducer
});

// export default reducers;

// import {FETCH_SONG_REQUEST, FETCH_SONG_SUCCESS, FETCH_SONG_FAILURE} from '../actions/types';
//
// const initialState = {
//     trackList: [],
//     activeTrack: [],
//     isLoading: null,
//     error: null
// };
//
// export default function trackReducer(state = initialState, actions) {
//     switch (actions.type) {
//         case FETCH_SONG_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//         case FETCH_SONG_SUCCESS:
//             return {
//                 ...state,
//                 trackList: actions.payload.data.data
//             };
//
//         case FETCH_SONG_FAILURE:
//             return {
//                 ...state,
//                 error: actions.payload
//             };
//
//         default:
//             return state;
//     }
// }