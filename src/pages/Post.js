import React from 'react'
import queryString from 'query-string'

import { fetchComments, getItem } from '../utils/api'

import CommentsView from '../components/CommentsView'
import Loading from '../components/Loading'
import MetaView from '../components/MetaView'

import '../styles/Post.scss'
import ThemeContext from '../utils/theme'

export default function Post(props) {
    const [ story, setStory ] = React.useState(null)
    const [ comments, setComments] = React.useState(null)

    const theme = React.useContext(ThemeContext)

    React.useEffect(() => {
        const { id } = queryString.parse(props.location.search)

        getComments(id)    
        getTitle(id)
    })

    const getComments = (postID) => {
        fetchComments(postID)
        .then((data) => {
            setComments(data)
        })
    }

    const getTitle = (postID) => {
        getItem(postID)
        .then((data) => {
            setStory(data)
        })
    }


    if(!(story)){
        return <Loading text="Loading post"/>
    }

    return (
        <div className="commentContainer">
            <h1><a className={theme} href={story.url}>{story.title}</a></h1>
            <div><MetaView data={story} /></div>

            {!comments ? <Loading text="Loading comments" /> : <CommentsView comments={comments}/>}
        </div>
    )
}