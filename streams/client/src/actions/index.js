import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM} from './types'
import streams from '../apis/streams'
import history from '../history'



export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().auth
        const res = await streams.post("/streams", {...formValues, userId});

        dispatch({
            type: CREATE_STREAM,
            payload: res.data
        });

        history.push("/")
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const res = await streams.get("/streams");

        dispatch({
            type: FETCH_STREAMS,
            payload: res.data
        });
    }
}

export const fetchStream = (streamId) => {
    return async (dispatch) => {
        const res = await streams.get(`/streams/${streamId}`);

        dispatch({
            type: FETCH_STREAM,
            payload: res.data
        });
    }
}

export const editStream = (streamId, formValues) => {
    return async (dispatch) => {
        const res = await streams.put(`/streams/${streamId}`, formValues);

        dispatch({
            type: EDIT_STREAM,
            payload: res.data
        });
    }
}

export const deleteStream = (streamId) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${streamId}`);

        dispatch({
            type: DELETE_STREAM,
            payload: streamId
        });
    }
}

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}