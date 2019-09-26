import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/StoriesView.scss'
import MetaView from './MetaView'

// stateless functional component to render stories, 
// given an array of 'story objects'


/////////

export default function StoriesView(props) {
    const { stories } = props
    return (
        <ul className="storyContainer">
            {stories.map((story, i) => (
                <li key={i} className="card">
                    <div className="scoreContainer">
                        <span>{story.score}</span>
                    </div>
                    <div className="postContainer">
                        <a className='storyLink' href={story.url}>{story.title}</a>
                        <div className="subText">
                            {'by '}
                            <Link
                                className="link"
                                to={{
                                    pathname: '/user',
                                    search: `?id=${story.by}`
                                }} >
                                {story.by}
                            </Link>
                            <TimeFormatter time={story.time} />
                            <Link
                                className="link"
                                to={{
                                    pathname: '/post',
                                    search: `?id=${story.id}`
                                }} >
                                {story.descendants}
                            </Link>
                            {` comments`}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

StoriesView.propTypes = {
    stories: PropTypes.array.isRequired // [Object, Object] 
}