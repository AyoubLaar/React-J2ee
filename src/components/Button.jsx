import { colors } from "../Parameters";

const Button = ({ text, varient, href, style, onclick, padding, type, color, attributes }) => {
    if (padding == undefined) padding = "10px 20px";
    if (color == undefined) color = colors[varient];
    if (type == "outlined") {
        return (
            href == undefined ?
                <button {...attributes} onClick={onclick} style={{
                    backgroundColor: "white", border: "solid 2px " + colors[varient], color: color, padding: padding, ...style
                }} > {text}</button>
                : <a href={href}><button {...attributes} onClick={onclick} style={{
                    backgroundColor: "white", border: "solid 2px " + colors[varient], color: color, padding: padding, ...style
                }} >{text}</button></a>
        )
    } else
        return (
            href == undefined ?
                <button {...attributes} onClick={onclick} style={{ height: "fit-content", backgroundColor: color, color: "white", border: "solid 2px " + colors[varient], width: "fit-content", padding, borderRadius: "5px", ...style }} >{text}</button>
                : <a href={href}><button onClick={onclick} style={{ height: "fit-content", backgroundColor: color, color: "white", border: "solid 2px " + colors[varient], width: "fit-content", padding: padding, borderRadius: "5px", ...style }} >{text}</button></a>
        )
}

export default Button;