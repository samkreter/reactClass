import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import { editStream, fetchStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = (props) => {
    useEffect(() => {
        if(!props.stream){
            props.fetchStream(props.match.params.id)
        }
    }, [])

    const onSubmit = (formValue) => {
        props.editStream(props.stream.id, formValue)
    }

    if (!props.stream){
        return null
    }

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                onSubmit={onSubmit}
                initialValues={_.pick(props.stream, "title", "description")}
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);