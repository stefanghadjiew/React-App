import React from "react";
import {Link} from "react-router-dom"


const Home = ({username,isLoggedIn,userId}) => {
    const handleClick = () => {
        console.log(userId)
    }
        /* console.log(userId) */
    
    
    if (isLoggedIn === false) {
        return (
            <div className="wrapper">
                <h2>Welcome,Guest!</h2>
                <h4>This is your personal ToWatchList</h4>
                <button className="btn btn-primary">Register</button>
            </div>
        )
    } else {
        return (
            <div className="wrapper">
            <h2>Greetings {username}</h2>
            <h4>Here are the movies you need to watch : </h4>
            <Link to="/movies">
                <button className="btn btn-primary" onClick={handleClick}>Add a new Movie</button>
            </Link>
            
        </div>
        )
    }
   
}

export default Home;