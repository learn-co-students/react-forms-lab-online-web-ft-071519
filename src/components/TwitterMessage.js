import React from "react";

class TwitterMessage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            // maxChars: this.props.maxChars
            input: ""
        };
    }

    handleInput = (event) => {
        // console.log(event.target.value)
        // Change the state with the value of the input.
        this.setState({
            input: event.target.value.substr(0, this.props.maxChars)
        })
    }

    render() {
        return (
        <div>
            <strong>Your message:</strong>
            <input 
                type="text" 
                name="message" 
                id="message"
                // The value, shown on screen is the state written in by onChange.
                value={this.state.input}
                // By using .bind, the state updates instead of overwrites.
                onChange={this.handleInput.bind(this)}
                />
            <p>Characters left: {this.props.maxChars - this.state.input.length}</p>
        </div>
        );
    }
}

export default TwitterMessage;
 