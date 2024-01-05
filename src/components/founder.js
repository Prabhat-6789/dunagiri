const Founder = () => {
    const image1 = "https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png";
    const image2 = "https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png";
    const image3 = "https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png";
    const founderImg = "https://static.wixstatic.com/media/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg/v1/fill/w_329,h_542,al_c,lg_1,q_80,enc_auto/9c6671_38312d206be444a8ba09d885b67a3d89~mv2.jpeg";

    return ( 
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
            <div style={{padding:'40px'}}>
                <h1 style={{fontSize:'40px'}}>Meet Our FounderPiyush Kumar</h1>
                <div style={{textAlign:'center',width:'400px'}}>
                    <p style={{fontFamily:'cursive'}}>
                        Guided by the philosophy that love transcends monetary value, 
                        Piyush Kumar, a former World Bank professional, established Dunagiri 
                        Retreat in 2005. His vision was to create a retreat that harmonizes 
                        with nature and nurtures the local community, fostering a unique synergy 
                        between guests and villagers under the retreat's guiding principles.
                    </p>
                </div>
                <div style={{display:'flex',marginLeft:'40px'}}>
                    <img src={image1} style={{marginRight:'10px'}}/>
                    <img src={image2} style={{marginRight:'10px'}}/>
                    <img src={image3}/>
                </div>

                <div style={{marginLeft:'40px'}}>
                    <button className="custom-button">ABOUT US</button>
                </div>

            </div>
            <div>
                <img src={founderImg} style={{marginRight:'50px'}}/>
            </div>
        </div>
     );
}
 
export default Founder;