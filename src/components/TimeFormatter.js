import React from 'react'
import PropTypes from 'prop-types'

// given a UTC time, formats it into `dd/mm/yyyy, XX:XX am/pm` format

export default function TimeFormatter(props) {
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
    const timeStamp = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${time}`

    return (
        <React.Fragment>
            {` ${timeStamp} `}
        </React.Fragment>
    )
}

TimeFormatter.propTypes = {
    time: PropTypes.number.isRequired
}