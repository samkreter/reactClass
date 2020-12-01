import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStream } from '../../actions'


const StreamShow = (props) => {
    useEffect(() => {
        if (!props.stream){
            props.fetchStream(props.match.params.id)
        }
    }, [])


    if (!props.stream){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{props.stream.title}</h1>
            <h3>{props.stream.description}</h3>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);