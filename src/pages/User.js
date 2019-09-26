import React from 'react'
import queryString from 'query-string'

import { getUser, getStories } from '../utils/api'

import Loading from '../components/Loading'
import StoriesView from '../components/StoriesView'

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

        if(!(user)){
            return <Loading text="Loading user"/>
        }

        return (
            <div>
                <h1>{user.id}</h1>

                {!stories ? <Loading text="Loading posts" /> : <StoriesView stories={stories} />}
            </div>
        )
    }
}