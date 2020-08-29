import React, { Component } from "react"

class MovieForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            description: "",
            movieImgUrl : ""
        }
        this.sendMovie=this.sendMovie.bind(this)
       
    }

    handleChange (e) {
        [e.target.name] = e.target.value
    }

    sendMovie(e) {
        e.preventDefault()
        console.log("Sent...")
    }

    render() {
        return (
            <div className="row justify-content-md-center text-center">
            <div className="col-md-6">
                <form onSubmit={this.sendMovie}>
                    <label htmlFor="name">Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={this.state.name} 
                        name="name"
                        onChange={this.handleChange}
                    /> 
                    <label htmlFor="description">description</label>
                    <input 
                        className="form-control" 
                        type="description" 
                        value={this.state.description} 
                        name="description"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="movieImgUrl">movieImgUrl</label>
                    <input 
                        className="form-control" 
                        type="movieImgUrl" 
                        value={this.state.movieImgUrl} 
                        name="movieImgUrl"
                        onChange={this.handleChange}
                    />
                       
                    
                    <button className="btn btn-primary btn-block btn-lg" type="submit">Add</button>
                </form>
            </div>
        </div>
        )
    }
}


export default MovieForm;