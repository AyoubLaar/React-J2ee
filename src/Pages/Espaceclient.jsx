import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StickyHeadTable from "../components/TableEspaceClient";
import { colors } from "../Parameters";

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
  top: '60px'
};

export default function EspaceClient() {
  return (
    <div >
      <Navbar backgroundColor={colors.navbar} />
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={contentContainerStyle}>
      </div>
    </div>
  );
}
