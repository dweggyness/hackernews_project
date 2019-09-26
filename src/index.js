import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Top from './pages/Top'
import Post from './pages/Post'
import User from './pages/User'
import New from './pages/New'

import Header from './components/Header'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="mainContainer">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Top} />
                        <Route exact path='/new' component={New} />
                        <Route path='/post' component={Post} />
                        <Route path='/user' component={User} />
                        <Route render={() => <h1>404 You're not supposed to see this! 404</h1>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
