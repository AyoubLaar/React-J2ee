import { colors } from "../Parameters";

const ButtonFilled = ({ text, varient, href }) => {
    return (
        href == undefined ?
            <button style={{ height: "fit-content", backgroundColor: colors[varient], color: "white", border: "none", width: "fit-content", padding: "10px", borderRadius: "5px" }} >{text}</button>
            : <a href={href}><button style={{ height: "fit-content", backgroundColor: colors[varient], color: "white", border: "none", width: "fit-content", padding: "10px", borderRadius: "5px" }} >{text}</button></a>
    )
}

export default ButtonFilled;