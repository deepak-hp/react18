import React from "react"

class ProfileClass extends React.Component {
    constructor(props) {
        // constructor
        // why do we do super props
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log("Child - constructor " + this.props.name)
    }

    componentDidMount() {
        console.log("Child - componentDidMount " + this.props.name);
        this.timer = setInterval(() => {
            console.log("Hello im interval " + this.props.name)
        }, 1000)
    }

    componentDidUpdate() {
        console.log("Child - componentDidUpdate " + this.props.name);
    }

    componentWillUnmount() {
        console.log("Child - componentWillUnmount " + this.props.name);
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>This is a profile class component</h1>
                <h2>Name: {this.props.name}</h2>
                <h4>count: {this.state.count}</h4>
                <button onClick={() => this.setState
                    ({ count: this.state.count + 1 })}>click</button>
            </div >
        )
    }
}

export default ProfileClass