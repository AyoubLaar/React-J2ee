import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



const YourComponent = () => {
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState('http://ssl.gstatic.com/accounts/ui/avatar_2x.png');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  $(".file-upload").on('change', function(){
      readURL(this);
  });
};

const UserProfile = () => {
  return (
    

    <>
    <Navbar />
    <div style={{display:'flex'}}>

    <div className="SideBarElt">
          <Sidebar/>
        </div>

    <div style={{display:'flex', flexDirection:'column', flex:'1',alignItems:'center'}}>
      <hr />
      <div className="container">
        
        <div className="row">
            <h1>User name</h1>
            <div className="">
              <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input type="file" className="upload" />
            </div>
        </div>

       <div className="row">
        <input type="text" placeholder='nom'/>
        <input type="number" placeholder='telephone'/>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
       </div>

       <div className="row">
        <input type="text" placeholder='prenom'/>
        <input type="date" placeholder='Date de naissance'/>
        <input type="text" placeholder='localisation'/>
        <input type="password" placeholder='verifier password'/>
       </div>
      </div>

      <div className='buttons'>
        <button style={{backgroundColor:'#58be3e',color:'white'}}>Sauvegarder</button>
        <button>Réinitialiser</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default UserProfile;
