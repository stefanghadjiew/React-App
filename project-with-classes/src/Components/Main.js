import React from "react"
import { Switch,Route } from "react-router-dom"
import Home from "./Home"
import Authentication from "./Authentication"
import MovieForm from "./MovieForm"

const Main = (props) => {
     const {isLoggedIn,addUserToState,username,userId,token,error} = props
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" render={props => <Home
                    userId={userId} 
                    isLoggedIn={isLoggedIn} 
                    username={username}
                    token={token}
                    {...props}/>}/>
                    <Route exact path="/signin" render = {props => <Authentication
                    error={error} 
                    btnText="Signin" 
                    isLoggedIn={isLoggedIn} 
                    addUserToState={addUserToState}
                    {...props}/>}/>
                    <Route exact path="/register" render = {props => <Authentication 
                    signUp
                    error={error} 
                    btnText="Register" 
                    isLoggedIn={isLoggedIn} 
                    addUserToState={addUserToState} 
                    {...props}/>}/>
                    <Route exact path="/movies" render = {props=> <MovieForm 
                    isLoggedIn={isLoggedIn}
                    userId={userId}
                    token={token}
                    addUserToState={addUserToState}
                    {...props}/>}/>
                </Switch>
            </div>
        )
    }


export default Main;