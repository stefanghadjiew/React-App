import React, {Component} from "react";
import { Link } from "react-router-dom"
import Logo from "../images/cine-defaut-1.jpg"

 
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
 }

    logout() {
        const {addUserToState} = this.props
        addUserToState(false,{},{has:false,message:""})
    
    }


    render () {
        const {isLoggedIn} = this.props
     
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light" id="nav">
                    <div className="container-fluid">
                        <Link 
                        to="/" 
                        className="navbar-brand">
                        Home
                        </Link>
                        <ul className="nav navbar-nav justify-content-end">
                            {(isLoggedIn===false) && (
                                <li className="nav-item">
                                <Link to="/signin" className="nav-link">Login</Link>
                            </li>
                            )}
                            {(isLoggedIn===true) && (
                                <li className="nav-item">
                                    <button className="log-out-btn" onClick={this.logout}>Logout</button>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
           )
  /* { {(isLoggedIn === false) ? "Login" : "Logout"} } */
}

}

export default Navbar;