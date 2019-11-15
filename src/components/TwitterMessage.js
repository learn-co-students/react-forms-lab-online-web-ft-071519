import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      charsLeft: props.maxChars,
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
        charsLeft: this.props.maxChars - e.target.value.length,
        message: e.target.value
      });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" />
        <p>Characters left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
