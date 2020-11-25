import React from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'



class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "51577264137-4fk2od53c2gi9jjd9rnl6f4ehqdq9jeh.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if (this.props.isSignedIn == null){
            return null
        }

        if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red button google">
                    <i className="google icon" />Sign Out
                </button>
            )
        }

        return (
            <button onClick={this.onSignInClick} className="ui red button google">
                <i className="google icon" />Sign In
            </button>
        )
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}


const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);