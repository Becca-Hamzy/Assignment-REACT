import "./Hero.css"
import palette from "../../assets/svg/colorpalette.jpeg"

const Hero = () =>{
  return(
     <div className="hero">
     <div className="text">
        <h1>The superfast color palettes generator!</h1>
        <p>Create the perfect palette or get inspired by thousand of beautiful color schemes. </p>

     </div>
     <div className="palette">
          <img src= {palette} alt="" />
     </div>
     </div>
  )
}
export default Hero