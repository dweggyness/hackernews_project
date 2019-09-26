import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/MetaView.scss'


// given a UTC time, formats it into `dd/mm/yyyy, XX:XX am/pm` format
function TimeFormatter(props) {
    const date = new Date(props.time * 1000)

    let hours = date.getHours()
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let meridiem = "AM"

    if(hours >= 12){
        meridiem = "PM"
    }
    hours = hours % 12
    if(hours === 0){
        hours = 12
    }
    
    
    const time = `${hours}:${minutes} ${meridiem}`
    const timeStamp = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${time}`

    return (
        <React.Fragment>
            {` on ${timeStamp} | `}
        </React.Fragment>
    )
}

TimeFormatter.propTypes = {
    time: PropTypes.number.isRequired
}


export default function MetaView(props) {
    const { story } = props
    return (
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
            {<TimeFormatter time={story.time} />}
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
    )
}

MetaView.propTypes = {
    story: PropTypes.array.isRequired
}