import React, { Component } from "react";
import MovieItem from "./MovieItem"

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            userMovies : []
        }
       
    }

    componentDidMount() {
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
    
    removeMoviesFromState(dataFromMovieItem){
        this.setState({
            userMovies:this.state.userMovies.filter(m=>m._id !== dataFromMovieItem)
        })
    }

    
    render() {
        if(this.state.userMovies.length === 0) {
            return (
              <h3>You have no movies</h3>
          )
      }
        const movies = this.state.userMovies
        console.log(movies)
        let movieList = movies.map(m =>(
                <MovieItem
                token={this.props.token}
                userId={this.props.userId}
                movieId={m._id}
                key={m._id} 
                name ={m.name} 
                desc={m.description}
                removeMoviesFromState={this.removeMoviesFromState.bind(this)}
                />
        ))
       return (
          <div>{movieList}</div> 
       )
    }
        
}



export default MovieList;