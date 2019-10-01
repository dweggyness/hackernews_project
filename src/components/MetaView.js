import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/MetaView.scss'
import ThemeContext from '../utils/theme'
import TimeFormatter from './TimeFormatter'

// the little thing below the post title 

// if passed a 'story' it renders " by user on time | x comnments"
// if passed a comment it renders " by user on time"

export default function MetaView(props) {
    const { data } = props

    const theme = React.useContext(ThemeContext)

    return (
        <div className={`subText ${theme}`}>
            {'by '}
            <Link
                className={`link ${theme}`}
                to={{
                    pathname: '/user',
                    search: `?id=${data.by}`
                }} >
                {data.by}
            </Link>
            {' on '} {<TimeFormatter time={data.time} />}
            {data.type === "story" && <React.Fragment><Link
                className={`link ${theme}`}
                to={{
                    pathname: '/post',
                    search: `?id=${data.id}`
                }} >
                {data.descendants}
            </Link>
            {` comments`} </React.Fragment>}
        </div>
    )
}

MetaView.propTypes = {
    data: PropTypes.object.isRequired
}