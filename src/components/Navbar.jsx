import React from "react";
import { context } from "../main";
import { colors } from "../Parameters";
import Logo from "../logo.svg"

function Navbar({ position, backgroundColor }) {
  if (position == undefined) position = "sticky";
  if (backgroundColor == undefined) backgroundColor = colors.navbar;
  const NavBarButtons = React.useContext(context);
  return (
    <header style={{
      height: "100px", display: "flex", flexDirection: "row",
      top: 0, left: 0, right: 0, padding: "20px"
      , zIndex: "100",
      justifyContent: "space-between",
      alignItems: "center",
      position: position,
      backgroundColor: backgroundColor
    }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <img src={Logo} alt="Logo" style={{ transform: "scale(1.2)" }} />
      </a>
      <nav style={{ display: "flex", gap: "10px" }}>
        {NavBarButtons}
      </nav>
    </header>);
}

export default Navbar;