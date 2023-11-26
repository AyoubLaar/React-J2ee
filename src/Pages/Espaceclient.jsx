import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StickyHeadTable from "../components/TableEspaceClient";
import { colors } from "../Parameters";
import { Tabs, Tab } from "@mui/material";
import TableRendezVousDemandes from "../components/TableRendezVousDemandes";

const mainContainerStyle = {
  display: 'flex',
};

const contentContainerStyle = {
  flex: '1',
  overflowY: 'auto',
};

const sidebarStyle = {
  flex: '0 0 auto',
  position: 'fixed',

};

function CustomTabPanel({ children, value, index }) {
  return (
    <>
      {value === index && children}
    </>
  );
}


export default function EspaceClient() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div >
      <Navbar backgroundColor={colors.navbar} />

      <div className="tableContainerStyle">
        {/* <div className="SideBarElt">
          <Sidebar />
        </div> */}
        <div className="tableHolder">
          <Tabs sx={{ position: "fixed", top: "100px" }} value={value} onChange={handleChange} >
            <Tab label="Demandes Rendez vous" />
            <Tab label="Rendez vous A venir" />
            <Tab label="Details du profile" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <TableRendezVousDemandes />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <StickyHeadTable />
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}
