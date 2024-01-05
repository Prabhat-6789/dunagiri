import './facility.css';

const Facility = () => {
    const img1 = "https://static.wixstatic.com/media/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg/v1/fill/w_1032,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_f5cbab3b21a240bfa896655c281f7938~mv2.jpeg";
    const img2 = "https://static.wixstatic.com/media/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg/v1/fill/w_1032,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_494b2f709514485b8004b95fb66652ed~mv2.jpg";
    const img3 = "https://static.wixstatic.com/media/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg/v1/fill/w_1032,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c6671_8e2794c148c149879d1ae7c411f4c54e.jpg";

    return ( 
        <div style={{backgroundColor:'#1B4D3E',marginTop:'15px'}}>
            <h1 style={{textAlign:'center',fontSize:'30px',marginTop:'15px',color:'white'}}>Why Choose Us</h1>

            <div className="image-container">
                <img src={img1} style={{marginLeft:'30px',width:'600px'}}alt="Description of the image" />
                    <div className="overlay-text3">
                        <h1>1. Elevated Living</h1>
                        <p style={{fontSize:'20px',padding:'20px',fontFamily:'cursive'}}>
                            A "playground of well-being" nestled in the heart of the Himalayas, 
                            Dunagiri Retreat is devoted entirely to wellbeing. The campus offers a 
                            vast array of accommodations, yoga halls, meditation rooms, and 
                            experiences, such as hikes, yoga, sound healing, wilderness exploration,
                             and more. 
                        </p>
                    </div>       
            </div>

            <div className="image-container">
                <img src={img2} style={{textAlign:'right',width:'600px'}}alt="Description of the image" />
                    <div className="overlay-text3">
                        <h1>2. Yoga & Meditation Near Babaji's Cave</h1>
                        <p style={{fontSize:'20px',padding:'20px',fontFamily:'cursive'}}>
                            Retreat leaders and participants get access to our main Yoga Hall, which can host up to 40 people, our Pyramid Meditation Hall, a capacity of 20 people, and Babaji Temple, a capacity of 20 people.
                        </p>
                    </div>       
            </div>

            <div className="image-container">
                <img src={img3} style={{marginLeft:'30px',width:'600px'}}alt="Description of the image" />
                    <div className="overlay-text3">
                        <h1>3. Farm-Fresh Ayurvedic Meals</h1>
                        <p style={{fontSize:'20px',padding:'20px',fontFamily:'cursive'}}>
                            Nourish your body with clean, locally sourced vegan meals developed by 
                            our local Chef. Our light and savory meals are included (at no extra charge) 
                            with each stay and are specially designed using Ayurvedic principles to support 
                            the multi-step detoxification process so you can leave feeling better than ever.
                        </p>
                    </div>       
            </div>
        </div>
     );
}
 
export default Facility;