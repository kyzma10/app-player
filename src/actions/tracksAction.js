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
import {startUrl, urls} from '../utils/urls';
import axios from 'axios/index';


const getPlayList = () => dispatch => {
    dispatch({type: FETCH_SONG_REQUEST});
    axios({
        method: 'get',
        url: startUrl
    })
        .then(response => dispatch({
            type: FETCH_SONG_SUCCESS,
            payload: response
        }))
        .catch(error => dispatch({
            type: FETCH_SONG_FAILURE,
            payload: error
        }))
};

const prevTrack = (id) => dispatch => {
    dispatch({
        type: TRACK_PREV,
        payload: id
    })
};

const nextTrack = (id) => dispatch => {
    dispatch({
        type: TRACK_NEXT,
        payload: id
    })
};

const shuffleTracks = () => dispatch => {
    dispatch({
        type: TRACK_SHUFFLE
    })
};

const currentTrack = (id) => dispatch => {
    dispatch({
        type: TRACK_CURRENT,
        payload: id
    })
};

const deleteTrack = (id) => dispatch => {
    dispatch({
        type: TRACK_DELETE,
        payload: id
    })
};

const findTracks = (val) => dispatch => {
    axios({
        method: 'get',
        url: `${urls}${val}`
    })
        .then(response => dispatch({
            type: FIND_TRACK_SUCCESS,
            payload: response
        }))
        .catch(error => dispatch({
            type: FIND_TRACK_FAILURE,
            payload: error
        }))
};

const findTrackAdded = (id) => dispatch => {
    dispatch({
        type: FIND_TRACK_ADDED,
        payload: id
    })
};

const clearSearchList = () => dispatch => {
    dispatch({
        type: CLEAR_SEARCH_LIST
    })
};

export {
    getPlayList,
    prevTrack,
    nextTrack,
    shuffleTracks,
    currentTrack,
    findTracks,
    deleteTrack,
    findTrackAdded,
    clearSearchList
};