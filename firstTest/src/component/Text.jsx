import "./text.css"

import data from "../assets/img/svg/client-databiz.svg"
import audio from '../assets/img/svg/client-audiophile.svg'
import meet from "../assets/img/svg/client-meet.svg"
import maker from "../assets/img/svg/client-maker.svg"


const Text = () =>{
    return(
        <div className="tex">
            <div className="text">
                <h1>Make <br />remote work</h1>
                 <p>Get your in sync,no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
           </div>
           <div className="btn2">
            <button className="bttn">Learn more</button>
           </div>
           <div className="img">
                <img src= {data} alt="" />
                <img src={audio} alt="" />
                <img src= {meet} alt="" />
                <img src= {maker} alt="" />
           </div>
        </div>
    )
}
export default Text 