import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import flv from 'flv.js'

import { fetchStream } from '../../actions'


const StreamShow = (props) => {
    const videoRef = useRef()
    let flvPlayer = null

    useEffect(() => {
        if (!props.stream){
            props.fetchStream(props.match.params.id)
        }

        buildPlayer()
    })

    const buildPlayer = () => {
        if (!flvPlayer && props.stream) {
            flvPlayer = flv.createPlayer({
                type: "flv",
                url: `http://localhost:8080/live/${props.match.params.id}`
            })
    
            flvPlayer.attachMediaElement(videoRef.current)
            flvPlayer.load()
        }
    }


    if (!props.stream){
        return <div>Loading...</div>
    }

    return (
        <div>
            <video ref={videoRef} style={{width: "100%"}}/>
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