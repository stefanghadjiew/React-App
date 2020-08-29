import React, {Component} from "react";
import { Link } from "react-router-dom"
import Logo from "../images/cine-defaut-1.jpg"

 
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
 }

handleClick() {
let {isLoggedIn} = this.props
  if (isLoggedIn === true){
      isLoggedIn = false
  } else {
      isLoggedIn = true
  }
    
}


    render () {
        const {isLoggedIn} = this.props
      /*   if(isLoggedIn === true) { */
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light" id="nav">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="ToWatchList"></img>
                        </Link>
                        <ul className="nav navbar-nav justify-content-end">
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link" onClick={(this.handleClick)}>{(isLoggedIn === false) ? "Login" : "Logout"}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
           )
  /*   } else {
        return (
            <h1>No one is logged in!</h1>
        )
    } */
}

}

export default Navbar;