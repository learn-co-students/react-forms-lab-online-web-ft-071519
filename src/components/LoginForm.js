import React from "react";

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
        username: "",
        password: ""
        };
    }

    handleUsername = (event) => {
        console.log(event.target.value)
        this.setState({
            username: event.target.value
        })
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    submit = (event) => {
        event.preventDefault();
        
        if (!!this.state.username && !!this.state.password) {this.props.handleLogin(this.state)}
        else {
            console.log("Fill in the blanks.")
        };
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                <label>
                    Username
                    <input
                    id="username"
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUsername}
                    />
                </label>
                </div>
                <div>
                <label>
                    Password
                    <input
                    id="password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    />
                </label>
                </div>
                <div>
                <button type="submit" >Log in</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
