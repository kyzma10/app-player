import axios from 'axios'
import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "../types/authTypes";
import {authUrl} from "../utils/urls";

export const auth = (value) => dispatch => {
    dispatch({type: AUTH_REQUEST});
    console.log('AUTH::::', value);
    axios({
        method: 'post',
        url: `${authUrl}/api/register`,
        data: value
    })
        .then(response => dispatch({
            type: AUTH_SUCCESS,
            payload: response
        }))
        .catch(error => dispatch({
            type: AUTH_FAILURE,
            payload: error
        }))
};