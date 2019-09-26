import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Top from './pages/Top'

import {ThemeProvider} from './utils/theme'
import Header from './components/Header'
import Loading from './components/Loading'

const New = React.lazy(() => import('./pages/New'))
const Post = React.lazy(() => import('./pages/Post'))
const User = React.lazy(() => import('./pages/User'))

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({theme}) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }
    render() {
        if(this.state.theme == 'light') {
            document.body.style.backgroundImage = 'linear-gradient(to top, #0c3483 0%, #a2b6df 80%, #6b8cce 80%, #a2b6df 80%)'
        } else {
            document.body.style.backgroundImage = 'linear-gradient(0deg, rgba(94,38,38,1) 0%, rgba(29,7,31,1) 100%)'
        }

        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={`mainContainer ${this.state.theme}`}>
                        <Header />
                        <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact path='/' component={Top} />
                                <Route exact path='/new' component={New} />
                                <Route path='/post' component={Post} />
                                <Route path='/user' component={User} />
                                <Route render={() => <h1>404 You're not supposed to see this! 404</h1>} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
