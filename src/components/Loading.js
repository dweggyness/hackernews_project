import React from 'react'
import PropTypes from 'prop-types'

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
            <h3 className="loadingContainer">
                <span>{this.state.content}</span>
            </h3>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
}