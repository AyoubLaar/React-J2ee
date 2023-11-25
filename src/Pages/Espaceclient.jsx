import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StickyHeadTable from "../components/TableEspaceClient";
import { colors } from "../Parameters";

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export default function EspaceClient() {
  return (
    <div className="Espaceclient">
      <Navbar backgroundColor={colors.navbar} />
      <Sidebar />
      <StickyHeadTable />
    </div>
  );
}
