import Button from "./Button";
import { colors } from "../Parameters";
import React from "react";

function Navbar({ backgroundColor, position }) {
  if (backgroundColor == undefined) backgroundColor = "none";
  if (position == undefined) position = "sticky";
  const [windowstate, setWindow] = React.useState(null);
  React.useEffect(() => {
    console.log(backgroundColor + position)
    setWindow(window.innerWidth);
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
      position: position, top: 0, left: 0, right: 0, padding: "20px"
      , backgroundColor: backgroundColor, zIndex: "1"
    }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <span style={{
          color: "white",
          fontSize: "32px",
          fontWeight: "700"
        }}>Logo</span>
      </a>
      <div style={{ flexGrow: 1 }}></div>
      <nav style={{ display: "flex", gap: "10px" }}>
        {windowstate > 700 ? buttons.map(props => <Button color="white" type="outlined" {...props} style={{ background: "none" }} />) : <Button varient="main" text={"navbar"} />}
      </nav>
    </header>
  );
}

export default Navbar;