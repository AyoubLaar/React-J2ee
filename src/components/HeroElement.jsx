import SearchFormWhite from "./SearchFormWhite"
import Navbar from "./Navbar";
import React from "react";
import Column from "./Column";

export default function HeroElement() {
    const [scroll, setscroll] = React.useState(0);
    React.useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setscroll(window.scrollY)
        });
    }, [])
    return <div style={{
        background: "linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ),url('/../src/assets/rsz_pexels-thirdman-7659869.jpg')",
        width: "100%", minHeight: "100vh", position: "relative", height: "fit-content", padding: "100px 0"
        , display: "flex", justifyContent: "center", alignItems: "center", zIndex: "0", backgroundPosition: "center"
        , backgroundSize: "cover"
    }}>
        <Navbar key={scroll == 0} position={scroll == 0 ? "absolute" : "fixed"} backgroundColor={scroll == 0 ? "none" : "#120D31"} />
        <Column gap={"25px"} padding={"10px"} alignItems={"center"} >
            <h1 style={{ fontWeight: "700", color: "white", textAlign: "center" }}>Choisir votre médecin</h1>
            <SearchFormWhite />
        </Column>
    </div>;
}