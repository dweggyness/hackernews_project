import React from 'react'
import PropTypes from 'prop-types'

// stateless functional component to render stories, 
// given an array of 'story objects'

export default function StoriesView(props) {
    const { stories } = props
    return (
        <ul>
            {stories.map((story, i) => (
                <li key={i}>
                    <p>{story.by}</p>
                    <p>{story.title}</p>
                </li>
            ))}
        </ul>
    )
}

StoriesView.propTypes = {
    stories: PropTypes.array.isRequired // [Object, Object] 
}