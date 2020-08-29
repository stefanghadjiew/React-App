import React, { Component } from "react"
import { Switch,Route } from "react-router-dom"
import Home from "./Home"
import Authentication from "./Authentication"

class Main extends Component {
    constructor(props){
        super(props)
    }
    render () {
        const {isLoggedIn,addUserToState} = this.props
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" render={props => <Home {...props}/>}/>
                    <Route exact path="/signin" render = {props => <Authentication 
                    btnText="Signin" 
                    isLoggedIn={isLoggedIn} 
                    addUserToState={addUserToState}
                    {...props}/>}/>
                    <Route exact path="/register" render = {props => <Authentication 
                    signUp 
                    btnText="Register" 
                    isLoggedIn={isLoggedIn} 
                    addUserToState={addUserToState} 
                    {...props}/>}/>
                </Switch>
            </div>
        )
    }
}

export default Main;