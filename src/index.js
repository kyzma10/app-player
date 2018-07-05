import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import AppContainer from './containers/app-container';
import SignContainer from './containers/sign-container';
import ErrorBoundary from './containers/error-boundary';
import routes from './utils/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path={routes.sign} component={SignContainer}/>
            <ErrorBoundary>
                <Route path={routes.tracks} component={AppContainer}/>
            </ErrorBoundary>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
