import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Loading.scss'
import ThemeContext from '../utils/theme'

export default function Loading(props) {
    const [ content, setContent ] = React.useState(props.text)

    const theme = React.useContext(ThemeContext)

    React.useEffect(() => {
        const { text } = props
        
        const id = window.setInterval(() => {
            content === text + '...'
                ? setContent( text )
                : setContent((content) => content + '.')
        }, 350)

        return (() => window.clearInterval(id));
    }, [content, props])

    return (
        <h3 className={`loading ${theme}`}>
            <span>{content}</span>
        </h3>   
    )
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
}