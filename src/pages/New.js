import React from 'react'

import { fetchNewStories } from '../utils/api'

import StoriesView from '../components/StoriesView'
import Loading from '../components/Loading'


export default class New extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            stories : null
        }
    }

    componentDidMount() {
        this.getStories(0, 30)
    }

    async getStories(start, end) {
        const data = await fetchNewStories(start, end)
        this.setState({ stories: data })
    }

    render() {
        const { stories } = this.state
        
        if(!stories){
            return <Loading />
        }

        return (
            <div>
                {stories && <StoriesView stories={stories}/>}
            </div>
        )
    }
}