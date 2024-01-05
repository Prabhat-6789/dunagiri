import './guestExp.css';
import { useState } from 'react';

const GuestExp = () => {
    const [activeDiv, setActiveDiv] = useState(1);
    const handleDotClick = (divNumber) => {
        setActiveDiv(divNumber);
    };

    const img1 = "https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_645,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg";
    const img2 = 'https://static.wixstatic.com/media/9c6671_3e07df29286c4f3b897ab0f1383cc63f~mv2.jpg/v1/crop/x_1572,y_0,w_2855,h_4000/fill/w_645,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DSC_0398_JPG.jpg';
    const img3 = 'https://static.wixstatic.com/media/9c6671_7f45a7afd42f49128374d5555fca84f3~mv2.jpg/v1/crop/x_72,y_0,w_2855,h_4000/fill/w_645,h_904,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20230510_174347.jpg';

    return (
        <div style={{backgroundColor:'wheat'}}>
            <div style={{marginTop:'20px'}}>
                <h1 style={{textAlign:'center',fontSize:'40px',padding:'20px'}}>Guest Experiences</h1>
            </div>
            {activeDiv===1 && (<div className="image-container">
                <img src={img1} className='circular-image' alt="Description of the image" />
                    <div className="overlay-text2">
                            <p style={{fontSize:'30px',padding:'20px'}}>
                                "“Everything contributed to the full success of our Qi Gong retreat: 
                                  the location, the superb rooms, the billions of flowers, 
                                  the delicious food and all the staff.""
                            </p>
                            <p>____</p>
                            <p style={{fontSize:'20px'}}>Pragata, Portugal</p>
                    </div>      
            </div>)}

            {activeDiv===2 && (<div className="image-container">
                <img src={img2} className='circular-image' alt="Description of the image" />
                    <div className="overlay-text2">
                            <p style={{fontSize:'30px',padding:'20px'}}>
                                “"They say when the gods want to meet they do so in the Himalayas. 
                                  And I've experienced that...”
                            </p>
                            <p>____</p>
                            <p style={{fontSize:'20px'}}>Miriam, Netherlands</p>
                    </div>  
            </div>)}

            {activeDiv===3 && (<div className="image-container">
                <img src={img3} className='circular-image' alt="Description of the image" />
                    <div className="overlay-text2">
                        <p style={{fontSize:'30px',padding:'20px'}}>
                            "“Everything contributed to the full success of our Qi Gong retreat: 
                            the location, the superb rooms, the billions of flowers, the delicious 
                            food and all the staff.""
                        </p>
                        <p>____</p>
                        <p style={{fontSize:'20px'}}>Mokshananda, USA</p>
                    </div>       
            </div>)}

            <div className="dots">
                {[1, 2, 3].map((dotNumber) => (
                <span
                    key={dotNumber}
                    className={`dot ${activeDiv === dotNumber ? 'active-dot' : ''}`}
                    onClick={() => handleDotClick(dotNumber)}
                    style={{marginTop:'10px'}}
                ></span>
                ))}
            </div>
        </div>
      );
}
 
export default GuestExp;