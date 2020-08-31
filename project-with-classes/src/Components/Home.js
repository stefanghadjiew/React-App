import React from "react";
import {Link} from "react-router-dom"
import MovieList from "./MovieList"



const Home = ({username,isLoggedIn,userId,token,has}) => {
    if (isLoggedIn === false) {
        return (
            <div className="wrapper">
                <h2>Welcome,Guest!</h2>
                <h4>This is your personal ToWatchList</h4>
                <Link to="/register">
                <button className="btn btn-primary">Register</button>
                </Link>
               
            </div>
        )
    } else {
        return (
            <div className="wrapper">
            <h2>Greetings {username}</h2>
            <h4>Here are the movies you need to watch : </h4>
            <MovieList userId={userId} token={token}/>
            <Link to="/movies">
                <button className="btn btn-primary">Add a new Movie</button>
            </Link>
            
        </div>
        )
    }
   
}

export default Home;