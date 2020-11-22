import React from 'react'
import {connect} from 'react-redux'

import PostList from './PostList'



const App = () => {
    return (
        <PostList />
    );
}

export default connect()(App);