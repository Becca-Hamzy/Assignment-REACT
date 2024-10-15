import logo from "../assets/img/svg/logo.svg"
import Nav from "./Nav"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                 <img src= {logo} alt="" />
                 <Nav/>
           </div>
           <div className="btn">
               <button id="log">Login</button>
               <button id="reg">Register</button>
           </div>
        </div>
    )
}

export default Header