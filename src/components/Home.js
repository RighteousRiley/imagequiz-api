import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false
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
                        <td>
                            <div>
                                <img src={require("../images/daisy.jpg")} alt="Daisy"/>
                                <p>Daisy</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src={require("../images/sunflower.png")} alt="Sunflower"/>
                                <p>Sunflower</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={require("../images/tulip.png")} alt="Tulip" />
                                <p>Tulip</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={require("../images/rose.png")} alt="Rose"/>
                                <p>Rose</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={require("../images/waterlily.png")} alt="Water Lilly"/>
                                <p>Water lily</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            </div>
        )
    }

    nav = () => {
        return(
    <div id="navigation-bar">
        <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        </ul>
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username"></input>
            <button type="submit" onClick={this.login}>Login</button>
        </form>
  </div>
        )
    }
    
    render () {
        if(this.state.loggedIn === false) {
            let nav = this.nav();
            return (
        <div>
            {nav}
            <hr></hr>
        </div>)
        } else {
            console.log("LOGGED IN")
            return (this.body())
        }
    }
}
export default Home;