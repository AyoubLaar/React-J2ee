import Button from "./Button";
import { colors } from "../Parameters";
import React from "react";
import RenderByRole from "./RenderByRole";

function Navbar() {
  const header = React.useRef(null);

  const unauthorized_buttons = [
    { text: "Vous êtes medecin ?", varient: "main", href: "/medecin/signup" }
    , { text: "Sign In", varient: "main", href: "/signin" }
    , { text: "Sign Up", varient: "main", href: "/patient/signup" }
  ].map(
    props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
  )

  const patient_buttons = [
    { text: "Espace patient", varient: "main", href: "/patient/monespace" }
  ].map(
    props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
  )

  const medecin_buttons = [
    { text: "Espace medecin", varient: "main", href: "/medecin/monespace" }
  ].map(
    props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
  )

  const admin_buttons = [
    { text: "Espace admin", varient: "main", href: "/medecin/monespace" }
  ].map(
    props => <Button color="white" type="outlined" {...props} style={{ background: colors.navbar, borderRadius: "5px" }} />
  )

  return (
    <header ref={header} style={{
      height: "fit-content", display: "flex", flexDirection: "row",
      top: 0, left: 0, right: 0, padding: "20px"
      , zIndex: "1", position: "fixed", backgroundColor: "#120D31"
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
        <RenderByRole patient={patient_buttons}
          admin={admin_buttons}
          unauthorized={unauthorized_buttons}
          medecin={medecin_buttons}
        />
      </nav>
    </header>
  );
}

export default Navbar;