import {combineReducers} from 'redux';
import trackReducer from './tracksReducer';
import playerReducer from './playerReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    tracks: trackReducer,
    auth: authReducer,
    player: playerReducer,
    form: formReducer
});
