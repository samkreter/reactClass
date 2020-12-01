import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchStreams } from "../../actions"

const StreamList = (props) => {
    const renderAdmin = (stream) => {
        if (stream.userId === props.currentUserId){
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }

        return null
    }

    const renderCreate = () => {
        if (props.isSignedIn){
            return (
                <div style={{textAlign: "right"}}>
                    <Link 
                        to="/streams/new" 
                        className="ui button primary"
                    >
                        Create Stream
                    </Link>
                </div> 
            )
        }
    }
    
    
    const renderStreams = () => {
        if (props.streams) {
            return props.streams.map(stream => {
                return (
                    <div className="item" key={stream.id}>
                        {renderAdmin(stream)}
                        <i className="large middle aligned camera icon" />
                        <div className="content">
                            <Link to={`/streams/${stream.id}`} className="header">
                                {stream.title}
                            </Link> 
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>
                )
            })
        }

        return null
    }

    useEffect(() => {
        props.fetchStreams()
    }, [])

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">
                {renderStreams()}
            </div>
            {renderCreate()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId,
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps, { fetchStreams } )(StreamList);