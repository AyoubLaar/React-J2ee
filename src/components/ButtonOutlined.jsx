import { colors } from "../Parameters";
const ButtonOutlined = ({ text, varient, style, onclick, disabled }) => {
    return <button disabled={disabled} onClick={onclick} style={{
        backgroundColor: "white", border: "solid 2px " + colors[varient], borderRadius: "5px", color: colors[varient], ...style
    }}>{text}</button>;
}

export default ButtonOutlined;