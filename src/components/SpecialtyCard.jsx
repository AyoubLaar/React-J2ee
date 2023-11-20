import { colors } from "../Parameters"
import Column from "./Column"

export default function SpecialtyCard({ specialite, image, href }) {
    return (
        <a href={href} style={{ textDecoration: "none", display: "flex", flexWrap: "wrap", color: "white" }}>
            <Column width={"300px"} height={"300px"} justifyContent={"center"} alignItems={"center"}>
                <h2 style={{ fontWeight: "700" }}>{specialite.toUpperCase()}</h2>
                <img src={image} style={{ objectFit: "fill", width: "100%", height: "100%", borderRadius: "20%" }} />
            </Column>
        </a>)
}