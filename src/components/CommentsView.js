import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import MetaView from './MetaView'

import '../styles/CommentsView.scss'
import {ThemeConsumer} from '../utils/theme'

// stateless functional component to render comments, 
// given an array of 'comment objects'

export default function CommentsView(props) {
    const { comments } = props
    return (
        <ThemeConsumer>
            {({theme}) => (
                <ul className="commentContainer">
                    {comments.map((comment, i) => (
                        <li key={i} className={`commentCard ${theme}`}>
                            <div>
                                <MetaView data={comment} />
                                <p dangerouslySetInnerHTML={{__html: comment.text}}></p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </ThemeConsumer>
    )
}

CommentsView.propTypes = {
    comments: PropTypes.array.isRequired // [Object, Object] 
}