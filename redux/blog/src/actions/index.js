import _ from 'lodash'

import jsonPlaceHolder from "../apis/jsonPlaceholder"



export const fetchPostAndusers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().posts, "userId"))

    userIds.forEach(userId => {
        dispatch(fetchUser(userId))
    })
}

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceHolder.get("/posts")

    dispatch({
        type: "FETCH_POSTS",
        payload: res.data
    })
}

export const fetchUser = (id) =>  async dispatch => {
    const res = await jsonPlaceHolder.get(`/users/${id}`)

    dispatch({
        type: "FETCH_USER",
        payload: res.data
    })
}

// export const fetchUser = (id) => dispatch => {
//      _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceHolder.get(`/users/${id}`)

//     dispatch({
//         type: "FETCH_USER",
//         payload: res.data
//     })
// })