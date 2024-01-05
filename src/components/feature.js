// YourComponent.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './feature.css'; // Import the CSS file for styling

const Feature = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleDotClick = (divNumber) => {
    setActiveDiv(divNumber);
  };
  
  const img1 = "https://static.wixstatic.com/media/9c6671_7b9aa9bf48ef4931b1c4f7385ca8e86b~mv2.png/v1/fill/w_257,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-cnntravel.png";
  const img2 = "https://static.wixstatic.com/media/9c6671_5f97ba7f0b6d4585956f85d112b25320~mv2.png/v1/fill/w_257,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/307_Outlook_Traveller_edited.png";
  const img3 = "https://static.wixstatic.com/media/9c6671_be30236887c54160b5f0deb0ea78c554~mv2.png/v1/fill/w_219,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pngwing_com%20(8).png";
  return (
    <div className="slider-container">
      <div className="content-container">
        {activeDiv === 1 && (
            <div className={`content ${activeDiv === 1 ? 'active' : ''}`}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src = {img1}/>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1 style={{fontSize:'40px'}}>As Featured In</h1>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p style={{fontSize:'20px'}}>"Glittering peaks and vivid landscapes create an environment 
                        that can calm the most unsettled of hearts."
                    </p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/CNN Travel" style={{
                                        fontSize:'20px',color:'black',
                                        marginLeft:'15px'}}>Jini Reddy, CNN Travel
                    </Link>
                </div>
            </div>
        )}

        {activeDiv === 2 && (
            <div className={`content ${activeDiv === 2 ? 'active' : ''}`}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src = {img2}/>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1 style={{fontSize:'40px'}}>As Featured In</h1>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p style={{fontSize:'20px'}}>"Time and global warming notwithstanding, the stories frame Dunagiri, 
                        a place lush with natural and mythological lore."
                    </p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/CNN Travel" style={{
                                        fontSize:'20px',color:'black',
                                        marginLeft:'15px'}}>Disha, Outlook Traveller
                    </Link>
                </div>
            </div>
        )}

        {activeDiv === 3 && (
            <div className={`content ${activeDiv === 3 ? 'active' : ''}`}>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <img src = {img3}/>
                </div>

                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1 style={{fontSize:'40px'}}>As Featured In</h1>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <p style={{fontSize:'20px'}}>"(Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!"
                    </p>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/CNN Travel" style={{
                                        fontSize:'20px',color:'black',
                                        marginLeft:'15px'}}>Ri, Tripadvisor
                    </Link>
                </div>
            </div>
        )}
        </div>

            <div className="dots">
            {[1, 2, 3].map((dotNumber) => (
            <span
                key={dotNumber}
                className={`dot ${activeDiv === dotNumber ? 'active-dot' : ''}`}
                onClick={() => handleDotClick(dotNumber)}
                style={{marginTop:'90px'}}
            ></span>
            ))}
        </div>
    </div>
  );
};

export default Feature;
