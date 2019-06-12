import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import DeleteWritable from './delete-writable';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<React.Fragment>
<Switch>
    <Route exact path = '/' component = {App} />
    <Route exact path = '/delete-writable' component = {DeleteWritable} />
    <Route component={NotFound} />
</Switch>
</React.Fragment>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
