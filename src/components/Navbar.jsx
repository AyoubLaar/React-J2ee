import ButtonFilled from "./ButtonFilled";
import { colors } from "../Parameters";
import React from "react";

function Navbar() {
  const [windowstate, setWindow] = React.useState(null);
  React.useEffect(() => {
    setWindow(window.innerWidth);
    console.log(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindow(window.innerWidth)
    });
  }, [])
  const buttons = [
    { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
    , { text: "Sign In", varient: "main", href: "/signin" }
    , { text: "Sign Up", varient: "main", href: "/patient/signup" }
  ]

  return (
    <header style={{
      height: "fit-content", display: "flex", flexDirection: "row",
      position: "sticky", top: 0, left: 0, right: 0, padding: "20px"
      , backgroundColor: "white"
    }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <span style={{
          color: colors.main,
          fontSize: "32px",
          fontWeight: "700"
        }}>Logo</span>
      </a>
      <div style={{ flexGrow: 1 }}></div>
      <nav style={{ display: "flex", gap: "10px" }}>
        {windowstate > 700 ? buttons.map(props => <ButtonFilled {...props} />) : <button>navbar</button>}
      </nav>
    </header>
  );
}

export default Navbar;