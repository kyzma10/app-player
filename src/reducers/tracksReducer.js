import {
    FETCH_SONG_REQUEST,
    FETCH_SONG_SUCCESS,
    FETCH_SONG_FAILURE,
    TRACK_SHUFFLE,
    TRACK_PREV,
    TRACK_NEXT,
    TRACK_CURRENT,
    FIND_TRACK_SUCCESS,
    FIND_TRACK_FAILURE } from '../types/tracksTypes';
import {next, prev, shuffle} from '../utils/helperFunc';

const initialState = {
    trackList: [],
    activeTrack: [],
    isLoading: null,
    error: null
};

export default function trackReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_SONG_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_SONG_SUCCESS:
            return {
                ...state,
                trackList: action.payload.data.data,
                activeTrack: [action.payload.data.data[0]]
            };

        case FETCH_SONG_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case TRACK_PREV:
            const prevIndex = prev(action.payload, state.trackList);
            return {
                ...state,
                activeTrack: [state.trackList[prevIndex]]
            };

        case TRACK_NEXT:
            const nextIndex = next(action.payload, state.trackList);
            return {
                ...state,
                activeTrack: [state.trackList[nextIndex]]
            };

        case TRACK_SHUFFLE:
            const newTrackList = shuffle(state.trackList);
            const newActiveTrack = [newTrackList[0]];
            return {
                ...state,
                trackList: newTrackList,
                activeTrack: newActiveTrack
            };

        case TRACK_CURRENT:
            return {
                ...state,
                activeTrack: state.trackList.filter(item => item.id === action.payload)
            };

        case FIND_TRACK_SUCCESS:
            return {
                ...state,
                trackList: action.payload.data.data,
                activeTrack: [action.payload.data.data[0]]
            };

        case FIND_TRACK_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}