import "./Nav.css"
import arrow from "../assets/img/svg/icon-arrow-down.svg"



const Nav = () =>{
  return (
    <div className="nav">
           <a href=""> Features  <img src = {arrow} alt="" /></a>
           <a href="">Company  <img src= {arrow} alt="" /> </a>
           <a href="">Career</a>
           <a href="">About</a>
    </div>
  )

}
export default Nav