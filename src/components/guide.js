import './guide.css';

const Guide = () => {
    const image1 = 'https://static.wixstatic.com/media/9c6671_4588634ebfff4608a7d721bfb22a70fa~mv2.jpg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_0343_JPG.jpg';
    const image2 = 'https://static.wixstatic.com/media/9c6671_0069cf199afa4330b1bd451b6cfae207~mv2.jpg/v1/fill/w_246,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/C1DSC03475_edited_edited.jpg';

    return ( 
        <div>
            <h1 style={{textAlign:'center'}}>Choose Your Path</h1>
            <br/>
            <p style={{textAlign:'center'}}>
                Choose your transformational adventure at your own pace — 
                join our dynamic retreat groups or come solo.</p>

            <div  style={{display:'flex',justifyContent:'space-between',padding:'50px'}}>
                <div style={{marginRight:'30px'}}>
                    <div>
                        <img src={image1} style={{borderRadius:'50%'}}/>
                    </div>
                    <div>
                        <h1>Guided Workshop & Retreats</h1>
                    </div>
                    <div>
                            <p style={{fontFamily:'cursive'}}>
                                Our Guided Retreats provide an immersive experience that promotes 
                                growth, connection, and transformation. Join like-minded individuals 
                                in guided sessions focused on self-discovery and collaborative learning. 
                                Led by expert facilitators, these workshops blend structured activities 
                                with free time, fostering introspection and skill development. Ideal for 
                                those seeking personal growth, these retreats offer a supportive space for 
                                learning, ensuring you leave feeling enriched and empowered.
                            </p>
                    </div>

                    <div >
                        <button className="custom-button">Inquire Now</button>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={image2} style={{borderRadius:'50%'}}/>
                    </div>
                    <div>
                        <h1>Self-Guided Explorations</h1>
                    </div>
                    <div>
                        <p style={{fontFamily:'cursive'}}>
                            Self-Guided Explorations offer a flexible experience for guests to 
                            celebrate, grieve, question, or transition at their own pace. 
                            It's a supportive, self-directed journey. This period is about 
                            honoring personal rhythms and desires, with healing and discovery 
                            at the core. The program, set in a beautiful landscape with a 
                            supportive community, nourishing meals, and healing practices, 
                            aims to rejuvenate and inspire guests, whether they stay for a 
                            weekend or week.
                        </p>
                    </div>

                    <div >
                        <button className="custom-button">Inquire Now</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Guide;