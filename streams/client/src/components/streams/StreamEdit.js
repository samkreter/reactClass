import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import { fetchStream } from '../../actions'


const StreamEdit = (props) => {
    useEffect(() => {
        if(!props.stream){
            props.fetchStream(props.match.params.id)
        }
    }, [])

    return (
        <div>StreamEdit: {props.stream}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);