import React from 'react';
import Login from "./Login";
import { Link } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
            authenticated:false,
            username: ""
        };
    }
    
    login = () => {
        this.setState({
            loggedIn: true
        });
    }
    
    body = () => {
        return(
            <div>
                
                <div id="flowersDiv">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <img src={require("../images/daffodil.png")} alt="Daffodil"/>
                                        <p>Daffodil</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img src={require("../images/cherryblossom.png")} alt="Cherry Blossom"/>
                                        <p>Cherry blossom</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img src={require("../images/lily.jpg")} alt="Lilly"/>
                                        <p>Lily</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>    
                </div>
            </div>
        )
    }
    
    render () {
        if(this.props.location) {
            if(this.props.location.state) {
                if(this.props.location.state.username && this.state.username <= 0) {
                    this.setState(
                        {
                            username: this.props.location.state.username,
                            authenticated: this.props.location.state.authenticated
                        }
                    )
                }
            }
        }

        return(
            <div>
                <div id="navigation-bar">
                    <div className="username">
                        {this.state.username.length > 0 ? this.state.username : <Login />}
                    </div>
                </div>
                <body className='body'>
                    {this.state.username.length > 0 ? this.body() : "NOT AUTHENTICATED"}
                </body>
                
            </div>
        
        )
        
    }
}
export default Home;