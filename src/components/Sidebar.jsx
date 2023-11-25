import React from 'react'
import "../globals.css"
import { SidebarData } from './SidebarData'

const sidebarStyle = {
    marginTop: '20px', 
  };

function Sidebar() {
  return (
    <div className='Sidebar' style= {sidebarStyle}>
      <div className="userProfile">
        <img src="/home/noureddine/Desktop/DATA/INE2/S3/P1/React-J2ee/src/pic.jpg" className="userAvatar" />
        <span className="userName">User Profile</span>
      </div>
      <ul className='SidebarList'> 
        {SidebarData.map((val, key) => {
          return (

            <li key = {key} 
                className= 'row' 
                id= {window.location.pathname == val.link ? "active" : ""}
                onClick={()=> {window.location.pathname = val.link}}>
                    
              {" "}
              <div id= "icon">{val.icon}</div>{" "}
              <div id= "title">
                {val.title}
              </div>
            </li>
          );
          })}
        </ul>
        </div>
  );
        
}

export default Sidebar
