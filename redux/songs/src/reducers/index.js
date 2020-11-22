import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        {
            title: "Hey There man",
            duration: "4:15"
        },
        {
            title: "Hey There man2",
            duration: "4:14"
        },
        {
            title: "Hey There man3",
            duration: "4:12"
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})


