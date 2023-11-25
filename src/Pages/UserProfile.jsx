import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';



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
    

    
    <div>
      <Navbar />
      
      <hr />
      <div className="container_bootstrap">
        
        
        <div className="row">
          <div className="col-sm-10">
            <h1>User name</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="text-center">
              <img
                src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                className="avatar img-circle img-thumbnail"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>
              <input type="file" className="text-center center-block file-upload" />
            </div>
            <br />
          </div>

          <div className="col-sm-9">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <hr />
                <form className="form" action="##" method="post" id="registrationForm">
                <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>nom</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>Prénom</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="phone"><h4>N° de téléphone</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any."/>
                          </div>
                      </div>
          
                      <div class="form-group">
                          <div class="col-xs-6">
                             <label for="mobile"><h4>Date de naissance</h4></label>
                              <input type="text" class="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Email</h4></label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>Localisation</h4></label>
                              <input type="email" class="form-control" id="location" placeholder="somewhere" title="enter a location"/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="password"><h4>Password</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password."/>
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="password2"><h4>Verfier le password</h4></label>
                              <input type="password" class="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2."/>
                          </div>
                      </div>
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br/>
                              	<button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Sauvegarder</button>
                               	<button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> réinitialiser</button>
                            </div>
                      </div>
                </form>
                <hr />
              </div>
              {/* Other tab-pane content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
