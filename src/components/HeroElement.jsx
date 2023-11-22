import SearchFormWhite from "./SearchFormWhite"
import Navbar from "./Navbar";
import React from "react";
import Column from "./Column";
import { colors } from "../Parameters";

export default function HeroElement() {
    const [scroll, setscroll] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setscroll(window.scrollY)
        });
    }, [])
    return <div style={{
        background: "linear-gradient( rgba(0,0,0,.9), rgba(0,0,0,.2) ),url('/../src/assets/teleconsultation_avec_medecin2.jpg')",
        width: "100%", minHeight: "100vh", position: "relative", height: "fit-content", padding: "100px 0"
        , display: "flex", justifyContent: "center", alignItems: "center", zIndex: "0", backgroundPosition: "center"
        , backgroundSize: "cover", backgroundRepeat: "no-repeat"
    }}>
        <Navbar
            position={scroll == 0 ? "absolute" : "fixed"}
            backgroundColor={scroll == 0 ? "" : colors.navbar}
        />
        <Column gap={"25px"} padding={"10px"} alignItems={"center"} style={{ backgroundColor: "rgb(7,5,19,0.5)", padding: "25px", borderRadius: "5px" }}>
            <h1 style={{ fontWeight: "700", color: "white", textAlign: "center" }}>Choisir votre médecin</h1>
            <SearchFormWhite />
        </Column>
    </div>;
}