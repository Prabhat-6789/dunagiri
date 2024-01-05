import './banner.css';

const Banner = () => {
    const img = "https://static.wixstatic.com/media/9c6671_5fe77d56c59b4643af0145e2c6e50c89f000.jpg/v1/fill/w_1157,h_622,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/9c6671_5fe77d56c59b4643af0145e2c6e50c89f000.jpg";
    return ( 
        <div className="image-container">
            <img src={img} alt="Description of the image" />
            <div className="overlay-text">
                <h1 style={{textAlign:'center',fontSize:'40px'}}>
                    Dunagiri Retreat
                </h1>
                <p style={{fontSize:'20px'}}>
                Experience serenity and divinity steps away from Mahavatar Babaji's Cave in the Himalayas.
                </p>

                <div >
                    <button className="custom-button">Inquire Now</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Banner;