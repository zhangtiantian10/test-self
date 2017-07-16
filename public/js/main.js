import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';


class Main extends React.Component {
    render() {
        return <div>hello</div>
    }
}

render(<Router history={browserHistory}>
        <Route path="/" component={Main}/>
    </Router>, document.getElementById("content"));