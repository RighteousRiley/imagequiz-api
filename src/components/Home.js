import React from 'react';
import Login from "./Login";
import Entry from './Entry';
import { Link, Redirect } from 'react-router-dom';
import server from '../ServerInterface/server';
import flower from '../images/flower.jpg';
import colors from '../images/colors.jpg';
import animals from '../images/animals.jpg';
class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
            authenticated:false,
            username: "",
            entries : [],
            cursor: 0 // current index in list of quizzes 
        };
    }

    login = () => {
        this.setState({
            loggedIn: true
        });
    }
    
    directFlower = () => {
        let from = {pathname:"/flower-quiz", state: {cursor:0, entries: this.state.entries, picture: "mydictionary/src/images/flower.jpg", prompt: "Which flower is this?"}};
        this.setState(
            {
                from: from
            }
        )
    }
    
    directAnimal = () => {
        let from = {pathname:"/animal-quiz", state: {cursor:1, entries: this.state.entries, prompt:"Name this Animal"}};
        this.setState(
            {
                from: from
            }
        )
    }

    directColor = () => {
        let from = {pathname:"/color-quiz", state: {cursor:2, entries: this.state.entries, prompt: "Name this color"}};
        this.setState(
            {
                from: from
            }
        )
    }

    body = () => {
        return(
            <div className="content">
                {this.state.entries.length > 0 ? <Link ><p>{this.state.entries[this.state.cursor].name.toUpperCase()} </p><img src={flower} alt="Flower Quiz" onClick={this.directFlower} to="/flower-quiz"/></Link> : "NO ENTRIES FETCHED"}
                {this.state.entries.length > 0 ? <Link to="/animal-quiz"><p>{this.state.entries[this.state.cursor+1].name.toUpperCase()} </p><img src={animals} alt="Flower Quiz" /></Link> : "NO ENTRIES FETCHED"}
                {this.state.entries.length > 0 ? <Link to="/color-quiz"><p>{this.state.entries[this.state.cursor+2].name.toUpperCase()} </p><img src={colors} alt="Flower Quiz" /></Link> : "NO ENTRIES FETCHED"}
            </div>
        )
    }

    componentDidMount() {
        const entries = server.fetchEntries();
        this.setState(
            {
                entries : entries
            }
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

        if(this.state.from) {
            let from = this.state.from;
            if(from.state) {
                return (
                    <Redirect to={from} />
                )
            }
        }

        return(
            <div>
                <div id="navigation-bar">
                    <div className="username">
                        {this.state.username.length > 0 ? <div className="username">{this.state.username}</div> : <Login />}
                    </div>
                </div>
                <body className='body'>
                    {this.state.username.length > 0 ? <div className="content">
                {this.state.entries.length > 0 ? <div><p>{this.state.entries[this.state.cursor].name.toUpperCase()}</p><img src={flower} alt="Flower Quiz" onClick={this.directFlower} /></div> : "NO ENTRIES FETCHED"}
                {this.state.entries.length > 0 ? <div><p>{this.state.entries[this.state.cursor+1].name.toUpperCase()} </p><img src={animals} alt="Flower Quiz" onClick={this.directAnimal}/></div> : "NO ENTRIES FETCHED"}
                {this.state.entries.length > 0 ? <div><p>{this.state.entries[this.state.cursor+2].name.toUpperCase()} </p><img src={colors} alt="Flower Quiz" onClick={this.directColor}/></div> : "NO ENTRIES FETCHED"}
            </div> : "NOT AUTHENTICATED"}
                </body>
                
            </div>
        
        )
        
    }
}
export default Home;