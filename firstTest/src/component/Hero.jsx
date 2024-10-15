import "./Hero.css"
import man from "../assets/img/svg/image-hero-desktop.png"
import Text from "./Text"

const Hero = () =>{
    return(
        <div className="hero">
            <Text/>
          <div >
               <img className="image" src= {man} alt="" />
          </div>
        </div>

    )
}
export default Hero