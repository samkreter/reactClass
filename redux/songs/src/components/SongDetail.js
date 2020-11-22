import React from 'react'
import {connect} from 'react-redux'


const SongDetail = ({song}) => {
    if (!song) {
        return <div><h1>Select a Song</h1></div>
    }

    return (
        <div>
            <h3>Details For</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>

        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);