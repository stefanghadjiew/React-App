import React, { Component } from "react"

class MovieForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            description : '',
            movieImgUrl : ''
        }
        this.sendMovie=this.sendMovie.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
    }

    handleChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    sendMovie = async (e) => {
        const {userId,token,addUserToState} = this.props
        e.preventDefault()
        const url = `/api/users/${userId}/movies`
        await fetch(url,{
            method : 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body : JSON.stringify(this.state)
        })
        .then(res=>res.json())
        .then(this.props.history.push("/"))
    }

    render() {
        const {isLoggedIn} = this.props
        if(isLoggedIn === true) {
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
                            type="text" 
                            value={this.state.description} 
                            name="description"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="movieImgUrl">movieImgUrl</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={this.state.movieImgUrl} 
                            name="movieImgUrl"
                            onChange={this.handleChange}
                        />
                           
                        
                        <button className="btn btn-primary btn-block btn-lg" type="submit">Add</button>
                    </form>
                </div>
            </div>
            )
        } else {
            return (
                <div>Please Log in/Register to vie this page!</div>
                
            )
        }
       
    }
}


export default MovieForm;