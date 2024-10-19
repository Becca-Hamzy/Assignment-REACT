 import Apple from "../../assets/svg/apple.svg"
import "./Appli.css"

const Appli = (props) =>{
    return(
        <div className= "AppCont">
            <img src= {props.img} alt="" />
            <h2>{props.title}</h2>
            <p className="words">{props.text}</p>


         </div>
         
    )

}
export default Appli