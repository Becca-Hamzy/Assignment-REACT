import "./Buttons.css"

const Button = (props) => {
    return(
        <div>
            <button className={props.className}> 
                  
                  {props.text}
            </button> 

        </div>
    )
}

export default Button