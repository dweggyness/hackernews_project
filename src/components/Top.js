import React from 'react'

import { fetchTopStories } from '../utils/api'

import StoriesView from './StoriesView'


export default class Top extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            stories : null
        }
    }

    componentDidMount() {
        this.getStories(0, 20)
    }

    getStories(start, end) {
        fetchTopStories(start, end)
        .then((data) => {
            this.setState({ stories: data })
        })
    }

    render() {
        const { stories } = this.state

        return (
            <div>
                {stories && <StoriesView stories={stories}/>}
            </div>
        )
    }
}