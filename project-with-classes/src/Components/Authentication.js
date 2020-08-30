import React,{ Component } from "react";

class Authentication extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
        }
        
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange (e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    apiCall = async (e) => {
        const {addUserToState} = this.props 
        const btnText = this.props.btnText.toLowerCase()
        e.preventDefault()
        const url = `/api/auth/${btnText}`
        await fetch (url,{
            method:"POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(this.state)
           
        })
        .then(response => response.json())
        .then(user => {
            addUserToState(user)
            console.log(user)
        })
        .then(this.setState({
            username: "",
            password: "",
            email: "",
        })
        )
        .then(this.props.history.push("/"))
        
    } 
     

    render() {
        const {signUp} = this.props
        const {btnText} = this.props
        return (
            
            <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                    <form onSubmit={this.apiCall}>
                        <label htmlFor="email">Email</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        value={this.state.email} 
                        name="email"
                        onChange={this.handleChange}
                        /> 
                        <label htmlFor="password">Password</label>
                        <input 
                        className="form-control" 
                        type="password" 
                        value={this.state.password} 
                        name="password"
                        onChange={this.handleChange}
                        />
                        {signUp && (
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                className="form-control" 
                                type="username" 
                                value={this.state.username} 
                                name="username"
                                onChange={this.handleChange}
                                />
                            </div>
                        )}
                        <button className="btn btn-primary btn-block btn-lg" type="submit">{btnText}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Authentication;