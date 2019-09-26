import React from 'react'
import queryString from 'query-string'

import { fetchComments, getItem } from '../utils/api'

import CommentsView from '../components/CommentsView'
import Loading from '../components/Loading'
import MetaView from '../components/MetaView'

import '../styles/Post.scss'
import {ThemeConsumer} from '../utils/theme'

export default class Post extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            story: null,
            comments: null
        }
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        this.getComments(id)    
        this.getTitle(id)
    }

    getComments(postID) {
        fetchComments(postID)
        .then((data) => {
            this.setState({ comments: data })
        })
    }

    getTitle(postID) {
        getItem(postID)
        .then((data) => {
            this.setState({ story: data })
        })
    }

    render() {
        const { story, comments} = this.state

        if(!(story)){
            return <Loading text="Loading post"/>
        }

        return (
            <ThemeConsumer>
                {({theme}) => (
                    <div className="commentContainer">
                        <h1><a className={theme} href={story.url}>{story.title}</a></h1>
                        <div><MetaView data={story} /></div>

                        {!comments ? <Loading text="Loading comments" /> : <CommentsView comments={comments}/>}
                    </div>
                )}
            </ThemeConsumer>
        )
    }
}