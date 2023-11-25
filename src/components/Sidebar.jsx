import React from 'react'
import "../globals.css"
import { SidebarData } from './SidebarData'
import Logo from "../logo.svg"

const sidebarStyle = {
    marginTop: '20px', 
  };

function Sidebar() {
  return (
    <div className= 'Espaceclient'>
    <div className='Sidebar' style= {sidebarStyle}>
      <div className="userProfile">
        <img src='/pic.jpg' className="userAvatar" /> 
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
        </div>
  );
        
}

export default Sidebar
