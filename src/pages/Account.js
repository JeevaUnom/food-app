import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';  


export default function Account({ loggedIn }) {
  const [profilePhoto, setProfilePhoto] = useState('default-profile.jpg');
  const [showChooseFile, setShowChooseFile] = useState(true);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const uploadedPhoto = e.target.result;
      setProfilePhoto(uploadedPhoto);
      setShowChooseFile(false);  
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRedirect = (path) => {
    navigate(path);
  };


  return (
    <div className="Account">
      <img src={profilePhoto} className="Profile" alt="" />
      <br /><br />
      <div className="file-input-container">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {showChooseFile && <span className="file-input-label">Choose a file</span>}
      </div>
      <br /><br />
      <h2> UserName: </h2><br />
      <h2> Email: </h2>
      <div >
      <form className='newrecipe'>
        <label>Recipe Name:</label>
        <input type='text' required></input><br></br>

        <label>TotalTiming:</label>
        <input type='number' required></input><br></br>
        
        <label>Cursine:</label>
        <input type='text' required></input><br></br>
        
        <label>Course:</label>
        <input type='text' required></input><br></br>

        <label>Diet:</label>
        <input type='text' required></input><br></br>

        <label>NO. of Servings:</label>
        <input type='number' required></input><br></br>

        <label>Ingredients:</label>
        <input type='textarea' placeholder='Share a full details' require></input><br></br>
        
        <label>Steps:</label>
        <input type='textarea' placeholder='Share a full details' required></input><br></br>

        <label>Image :</label>
        <div className="file-input">
        <input type="file" accept="image/*" required />
        Choose a file
        </div>
        <br></br><br></br>
      <center>
      <button type='submit' className='btn'>Submit</button>
      </center>
        
      </form>
     
      </div>
    </div>

  );
}
