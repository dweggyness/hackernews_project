import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/StoriesView.scss'
import MetaView from './MetaView'

import {ThemeConsumer} from '../utils/theme'

// stateless functional component to render stories, 
// given an array of 'story objects'


/////////

export default function StoriesView(props) {
    const { stories } = props
    return (
        <ThemeConsumer>
        {({ theme }) => (
            <ul className='storyContainer'>
                {stories.map((story, i) => (
                    <li key={i} className="card">
                        <div className={`scoreContainer ${theme}`}>
                            <span className={theme}>{story.score}</span>
                        </div>
                        <div className={`postContainer ${theme}`}>
                            <a className={`storyLink ${theme}`} href={story.url}>{story.title}</a>
                            <MetaView data={story} />
                        </div>
                    </li>
                ))}
            </ul>
        )}
        </ThemeConsumer>
    )
}

StoriesView.propTypes = {
    stories: PropTypes.array.isRequired // [Object, Object] 
}