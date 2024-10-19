import "./Header.css"
import logo from "../../assets/svg/logo.svg"

const Header = () =>{
    return(
         <div className="header">
            <div >
                <img className="logo" src= {logo} alt="" />

            </div>
            <div className="anc">
                <a href="#">Tools</a>
                <a href="#">Go Pro </a>
                <p>Sign In</p>
                <button className="btn">Sign Up</button>

            </div>
                
         
         </div>



    )
}
export default Header