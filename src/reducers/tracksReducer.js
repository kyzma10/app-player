import {
    FETCH_SONG_REQUEST,
    FETCH_SONG_SUCCESS,
    FETCH_SONG_FAILURE,
    TRACK_SHUFFLE,
    TRACK_PREV,
    TRACK_NEXT,
    TRACK_CURRENT,
    FIND_TRACK_SUCCESS,
    FIND_TRACK_FAILURE,
    TRACK_DELETE,
    FIND_TRACK_ADDED,
    CLEAR_SEARCH_LIST } from '../types/tracksTypes';
import {checkDuplicate, next, prev, shuffle} from '../utils/helperFunc';

const initialState = {
    trackList: [],
    activeTrack: [],
    searchList: [],
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

        case TRACK_DELETE:
            return {
                ...state,
                trackList: state.trackList.filter(item => item.id !== action.payload)
            };

        case FIND_TRACK_SUCCESS:
            return {
                ...state,
                searchList: action.payload.data.data
            };

        case FIND_TRACK_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case FIND_TRACK_ADDED:
            const addedTrack = state.searchList.filter(item => item.id === action.payload);
            if(checkDuplicate(state.trackList, addedTrack) === true) {
                return {
                    ...state,
                    trackList: [...state.trackList, ...addedTrack],
                    searchList: state.searchList.filter(item => item.id !== action.payload)
                }
            } else {
                return {
                    ...state,
                    searchList: state.searchList.map(item => {
                        if(item.id === action.payload)
                            item = {...item, warning: 'This track exist in your playlist'};
                        return item;
                    })
                }
            }


        case CLEAR_SEARCH_LIST:
            return {
                ...state,
                searchList: []
            };

        default:
            return state;
    }
}