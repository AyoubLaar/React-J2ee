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

};


export default function EspaceClient() {
  return (
    <div >
      <Navbar backgroundColor={colors.navbar} />

      <div className="tableContainerStyle">

        <div className="SideBarElt">
          <Sidebar/>
        </div>
        <div className="tableHolder">
        <StickyHeadTable/>
        </div>

        
        
       
      </div>

     
      
    </div>
  );
}
