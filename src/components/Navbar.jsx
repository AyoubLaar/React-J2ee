import React from "react";
import { context } from "../main";
import { colors } from "../Parameters";

function Navbar({ position, backgroundColor }) {
  if (position == undefined) position = "sticky";
  if (backgroundColor == undefined) backgroundColor = colors.navbar;
  const NavBarButtons = React.useContext(context);
  return (
    <header style={{
      height: "fit-content", display: "flex", flexDirection: "row",
      top: 0, left: 0, right: 0, padding: "20px"
      , zIndex: "1",
      position: position,
      backgroundColor: backgroundColor
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
        {NavBarButtons}
      </nav>
    </header>);
}

export default Navbar;