import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import SignContainer from './containers/SignContainer';
import ErrorBoundary from './containers/ErrorBoundary';
import routes from './utils/routes';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path={routes.sign} component={SignContainer}/>
                <ErrorBoundary>
                    <Route path={routes.tracks} component={AppContainer}/>
                </ErrorBoundary>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
