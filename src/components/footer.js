const Footer = () => {
    const image1 = 'https://static.wixstatic.com/media/fe00ce246d327ce9baa69cc998beb250.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe00ce246d327ce9baa69cc998beb250.png';
    const image2 = "https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png";
    const image3 = "https://static.wixstatic.com/media/b08671e20c9eb4441008fc386d2222f4.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b08671e20c9eb4441008fc386d2222f4.png";
    const image4 = "https://static.wixstatic.com/media/f79f84624bcb45e29bf041771800a20c.gif";
    const image5 = "https://static.wixstatic.com/media/9c6671_e22fdc1c18694a0aae893c297145653a~mv2.png/v1/fill/w_64,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_e22fdc1c18694a0aae893c297145653a~mv2.png";
    const image6 = "https://static.wixstatic.com/media/9c6671_e22fdc1c18694a0aae893c297145653a~mv2.png/v1/fill/w_64,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_e22fdc1c18694a0aae893c297145653a~mv2.png";

    return ( 
        <div style={{backgroundColor:'#1B4D3E'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div style={{color:'white'}}>
                    <h2 >Contact Us</h2>
                    <p>
                        TEL: +91 98102 67719
                        <br/>
                        +91 96901 32425
                        <br/>
                        WhatsApp: +91 98102 67719
                        <br/>
                        E-MAIL: delighted@dunagiri.com
                    </p>
                </div>

                <div style={{color:'white'}}>
                    <h2 >Address</h2>
                    <p>
                        Village Chari, Near Mahavatar
                        <br/>
                        Babaji's Cave, PO Dunagiri,+91 96901 32425
                        <br/>
                        Block Dwarahat, District
                        <br/>
                        Almora Uttarakhand, India 
                    </p>
                </div>

                <div>
                    <h2>Follow Us</h2>
                    <div>
                        <img src={image1} style={{marginRight:'10px'}}/>
                        <img src={image2} style={{marginRight:'10px'}}/>
                        <img src={image3} style={{marginRight:'10px'}}/>
                        <img src={image4} style={{marginRight:'10px'}}/>
                    </div>
                    <h2>We Accept</h2>
                    <div>
                        <img src={image5} style={{marginRight:'10px'}}/>
                        <img src={image6}/>
                    </div>
                </div>
            </div>

            <div style={{marginBottom:'20px'}}>
                <p style={{textAlign:'center',color:'white'}}>© 2023 by DUNAGIRI RETREAT </p>
            </div>
        </div>
     );
}
 
export default Footer;