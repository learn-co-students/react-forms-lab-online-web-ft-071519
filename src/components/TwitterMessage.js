import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      currentChars: 0
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value,
      currentChars: event.target.value.length
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
          onChange={event => this.handleChange(event)}
          value={this.state.message}
        />
          {this.props.maxChars - this.state.currentChars}
      </div>
    );
  }
}

export default TwitterMessage;
