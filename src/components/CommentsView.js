import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// stateless functional component to render comments, 
// given an array of 'comment objects'

export default function CommentsView(props) {
    const { comments } = props
    return (
        <ul>
            {comments.map((comment, i) => (
                <li key={i}>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: comment.text}}></p>
                        <div>{comment.by && `by ${comment.by}`}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

CommentsView.propTypes = {
    comments: PropTypes.array.isRequired // [Object, Object] 
}