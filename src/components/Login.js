import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    onLogin() {

    }
    render () {
        return(
            <form type="submit" action={this.onLogin}>
                <label for="username">Username: </label>
                <input type="text" name="username"></input>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default Login;