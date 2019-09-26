import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Loading.scss'
import {ThemeConsumer} from '../utils/theme'

export default class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: this.props.text
        }
    }
    componentDidMount() {
        const { text } = this.props
        
        this.interval = window.setInterval(() => {
            this.state.content === text + '...'
                ? this.setState({ content: text })
                : this.setState(({content}) => ({ content: content + '.'}))
        }, 350)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {
        return (
            <ThemeConsumer>
                {({ theme }) => (
                    <h3 className={`loading ${theme}`}>
                        <span>{this.state.content}</span>
                    </h3>   
                )}
            </ThemeConsumer>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
}