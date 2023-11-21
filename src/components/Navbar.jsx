import Button from "./Button";
import { colors } from "../Parameters";
import React from "react";
import RenderIfNotAuthentified from "./RenderIfNotAuthentified";
import RenderIfAuthentifiedPatient from "./RenderIfAuthentifiedPatient";

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
  const unauthorized_buttons = [
    { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
    , { text: "Sign In", varient: "main", href: "/signin" }
    , { text: "Sign Up", varient: "main", href: "/patient/signup" }
  ]
  const patient_buttons = [
    { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
    , { text: "Sign In", varient: "main", href: "/signin" }
    , { text: "Sign Up", varient: "main", href: "/patient/signup" }
  ]
  const medecin_buttons = [
    { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
    , { text: "Sign In", varient: "main", href: "/signin" }
    , { text: "Sign Up", varient: "main", href: "/patient/signup" }
  ]
  const admin_buttons = [
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
        <RenderIfNotAuthentified>
          {windowstate > 700 ? unauthorized_buttons.map(props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />) : <Button varient="main" text={"navbar"} />}
        </RenderIfNotAuthentified>
        <RenderIfAuthentifiedPatient>
          {windowstate > 700 ? patient_buttons.map(props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />) : <Button varient="main" text={"navbar"} />}
        </RenderIfAuthentifiedPatient>
      </nav>
    </header>
  );
}

export default Navbar;