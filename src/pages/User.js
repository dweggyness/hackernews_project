import React from 'react'
import queryString from 'query-string'

import { getUser, getStories } from '../utils/api'

import TimeFormatter from '../components/TimeFormatter'
import Loading from '../components/Loading'
import StoriesView from '../components/StoriesView'

import '../styles/User.scss'
import {ThemeConsumer} from '../utils/theme'


export default class User extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user: null,
            stories: null
        }
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        this.getUserData(id)
    }

    async getUserData(id) {
        const user = await getUser(id)
        this.setState({ user: user})

        const stories = await getStories(user.submitted)
        this.setState({ stories: stories})
    }

    render() {
        const { user, stories} = this.state
        console.log(this.state)
        if(!(user)){
            return <Loading text="Loading user"/>
        }

        return (
            <ThemeConsumer>
                {({ theme }) => (
                    <React.Fragment>
                        <div className="userContainer">
                            <h1 className={`userTitle ${theme}`}>{user.id}</h1>
                            <p className={`userInfo ${theme}`}>{`joined `} <span><TimeFormatter time={user.created} /></span> {` has `} <span>{user.karma}</span> {` karma`}</p>
                            <p className={`about ${theme}`} dangerouslySetInnerHTML={{__html: user.about}}></p>
                            
                            <h3 className={`postsWord ${theme}`}>Posts</h3>
                        </div>
                        {!stories ? <Loading text="Loading posts" /> : 
                            (stories === undefined || stories.length === 0) ? <div className={`postsWord ${theme}`} style={{marginLeft: '2rem'}}>No posts found!</div> : <StoriesView stories={stories} />}
                    </React.Fragment>
                )}
            </ThemeConsumer>
        )
    }
}