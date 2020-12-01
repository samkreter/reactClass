import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { deleteStream } from '../../actions'
import Modal from '../Modal'
import history from '../../history'



const StreamDelete = props => {
    useEffect(() => {
        if(!props.stream){
            props.fetchStream(props.match.params.id)
        }
    }, [])
    
    const onDelete = () => {
        props.deleteStream(props.stream.id)
    }
    
    const renderActions = () => {
        return (
            <React.Fragment>
                <button onClick={onDelete} className="ui button negative">Delete</button>
                <button onClick={() => history.push("/")} className="ui button">Cancel</button>
            </React.Fragment>
        )
    }

    const renderContent = () => {
        if (!props.stream) {
            return "Are you sure you want to delete this stream?"
        }
        return (
            <div>
                Are you sure you want to delete the stream?
                <p>{props.stream.title}</p>
            </div>
        )
    }

    return (
            <Modal 
                title="StreamDelete"
                content={renderContent()}
                actions={renderActions()}
                onDismiss={() => history.push("/")}
            />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStream})(StreamDelete);