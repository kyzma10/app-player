import {
    FETCH_SONG_REQUEST,
    FETCH_SONG_SUCCESS,
    FETCH_SONG_FAILURE,
    TRACK_SHUFFLE,
    TRACK_PREV,
    TRACK_NEXT,
    TRACK_CURRENT, FIND_TRACK_SUCCESS, FIND_TRACK_FAILURE
} from '../types/tracksTypes';
import {Urls} from "../utils/urls";
import axios from "axios/index";


const getPlayList = () => dispatch => {
    dispatch({type: FETCH_SONG_REQUEST});
    axios({
        method: 'get',
        url: `${Urls}eminem`
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

const findTracks = (val) => dispatch => {
    axios({
        method: 'get',
        url: `${Urls}${val}`
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

export {
    getPlayList,
    prevTrack,
    nextTrack,
    shuffleTracks,
    currentTrack,
    findTracks
};