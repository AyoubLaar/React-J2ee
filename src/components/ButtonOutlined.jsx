import { colors, lightcolors } from "../Parameters";
const ButtonOutlined = ({ text, varient }) => {
    return <button style={{
        backgroundColor: "white", border: "solid 2px " + colors[varient], color: colors[varient]
    }}>{text}</button>;
}

export default ButtonOutlined;