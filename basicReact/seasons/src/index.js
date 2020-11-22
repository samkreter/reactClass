import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    // Recommended to not do data loading inside of constructor but instead in the componentDidMount
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errMessage: ""};
    // }

    state = { lat: null, errMessage: ""}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errMessage: err.message})
        );
    }

    render() {
        if (this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>;
        }

        if (!this.state.errMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please Accept Location Request"/>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))