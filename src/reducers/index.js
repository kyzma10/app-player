import {combineReducers} from 'redux';
import trackReducer from './tracksReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    tracks: trackReducer,
    auth: authReducer,
    form: formReducer
});
