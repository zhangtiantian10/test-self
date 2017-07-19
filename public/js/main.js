import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import helloMiddle from './middlewares/get-hello';

import Hello from './containers/hello';
import Home from './containers/Home';

const createStoreWithMiddleware = applyMiddleware(helloMiddle)(createStore);

const store = createStoreWithMiddleware(reducers);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/home" component={Home}/>
    </Router>
</Provider>, document.getElementById("content"));