import React from 'react'
import { connect } from 'react-redux'

import { fetchPostAndusers } from '../actions'
import UserHeader from './UserHeader'



class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostAndusers()
    }

    renderList(){
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="icon large middle aligned user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        })
    }

    render(){
        return <div className="ui relaxed diveded list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPostAndusers})(PostList);