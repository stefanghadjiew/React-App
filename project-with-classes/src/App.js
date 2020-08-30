import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar" 
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./Components/Main"

class App extends Component {
    constructor(props) {
      super (props)
      this.state = {
        isLoggedIn: false,
        user : {},
        }
        
        this.addUserToState=this.addUserToState.bind(this)
      }
    
    addUserToState (dataFromAuth) {
      this.setState({
        isLoggedIn:true,
        user : dataFromAuth,
        userMovies : []
      })
    }  

    

    render () {
        return (
          <Router>
            <div className="App">
              <Navbar isLoggedIn={this.state.isLoggedIn}/>
              <Main addUserToState={this.addUserToState} 
              username={this.state.user.username} 
              isLoggedIn={this.state.isLoggedIn}
              userId ={this.state.user.id}
              token ={this.state.user.token}/>
            </div>
          </Router>
        );
    }
}

export default App;
