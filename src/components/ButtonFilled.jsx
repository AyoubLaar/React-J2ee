import { colors } from "../Parameters";

const ButtonFilled = ({ text, varient, href, style, onclick }) => {
    return (
        href == undefined ?
            <button onClick={onclick} style={{ height: "fit-content", backgroundColor: colors[varient], color: "white", border: "none", width: "fit-content", padding: "10px", borderRadius: "5px", ...style }} >{text}</button>
            : <a href={href}><button onClick={onclick} style={{ height: "fit-content", backgroundColor: colors[varient], color: "white", border: "none", width: "fit-content", padding: "10px", borderRadius: "5px", ...style }} >{text}</button></a>
    )
}

export default ButtonFilled;