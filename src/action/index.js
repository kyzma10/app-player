import {FETCH_SONG_REQUEST, FETCH_SONG_SUCCESS, FETCH_SONG_FAILURE} from './types';
import Url from "../utils/urls";
import axios from "axios/index";


const getPlayList = () => {
    return function (dispatch) {
        dispatch({type: FETCH_SONG_REQUEST});
        axios({
            method: 'get',
            url: Url
        })
            .then(response => dispatch({
                type: FETCH_SONG_SUCCESS,
                payload: response
            }))
            .catch(error => dispatch({
                type: FETCH_SONG_FAILURE,
                payload: error
            }));
    }
};

export {
    getPlayList
};