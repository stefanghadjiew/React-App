import React, { Component } from "react";
import MovieItem from "./MovieItem"

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            userMovies : []
        }
    }

    componentWillMount() {
        const url = `/api/users/${this.props.userId}/movies/`
        fetch (url,{
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${this.props.token}`
            }
        })
        .then(res=>res.json())
        .then(userMovies=>this.setState({userMovies : userMovies}))
        
    }
    

    render() {
        const movies = this.state.userMovies
        let movieList = movies.map(m =>(
            <MovieItem 
            key={m._id} 
            name ={m.name} 
            desc={m.description}
            />
        ))
       return (
          <div>{movieList}</div> 
       )
    }
}


export default MovieList;