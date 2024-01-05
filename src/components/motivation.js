import MotivationIdea from "./motivationIdea";

const Motivation = () => {
    const imgPerson = 'https://static.wixstatic.com/media/9c6671_c8b4a2787f4748eaa228ab6f5196253f~mv2.png/v1/fill/w_490,h_810,al_c,q_90,enc_auto/are-you.png';
    const img1 = "https://static.wixstatic.com/media/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png";
    const img2 = "https://static.wixstatic.com/media/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png";
    const img3 = "https://static.wixstatic.com/media/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_a88146a9668348fb80e5477f9a5f74e4~mv2.png";
    const img4 = "https://static.wixstatic.com/media/9c6671_27850f48618449b082b44252a260e174~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_27850f48618449b082b44252a260e174~mv2.png";
    const img5 = "https://static.wixstatic.com/media/9c6671_27850f48618449b082b44252a260e174~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_27850f48618449b082b44252a260e174~mv2.png";
    const img6 = "https://static.wixstatic.com/media/9c6671_ae511500a13b4b7bbfea2e1c92b542c2~mv2.png/v1/fill/w_56,h_56,al_c,lg_1,q_85,enc_auto/9c6671_ae511500a13b4b7bbfea2e1c92b542c2~mv2.png";
    const h1 = (<h2>Searching for something greater in life?</h2>);
    const h2 = (<h2>In need of a mind-body reset?</h2>);
    const h3 = (<h2>Experiencing a life transition?</h2>);
    const h4 = (<h2>Looking for a spiritual awakening?</h2>);
    const h5 = (<h2>Ready to refill your cup?</h2>);
    const h6 = (<h2>Wanting to live a healthier, happier life?</h2>);
    const p1 = (<p style={{fontFamily:'cursive'}}>Immerse yourself in a period of reflection and self-discovery to 
                    uncover your desires and purpose.</p>)
    const p2 = (<p style={{fontFamily:'cursive'}}>Discover an approach to wellness tailored to your unique 
                   constitution that gives your mind and body what it needs to thrive.</p>)
    const p3 = (<p style={{fontFamily:'cursive'}}>Gain tools to move through periods of unease with purpose and clarity.</p>)
    const p4 = (<p style={{fontFamily:'cursive'}}>Experience profound shifts as you reconnect to the divine through 
                   daily meditation and yoga practices.</p>)
    const p5 = (<p style={{fontFamily:'cursive'}}>Step away from that to-do list to nourish and replenish yourself in a lasting way.</p>)
    const p6 = (<p style={{fontFamily:'cursive'}}>Uncover Kriya Yoga's secrets to thriving wellbeing and awaken 
                   the eternal source of joy wit</p>)
    return ( 
        <div style={{marginTop:'25px',display:'flex',justifyContent:'space-between'}}>
            <div style={{marginRight:'100px'}}>
                <img src={imgPerson} style={{width:'400px'}}/>
            </div>

            <div>
                <p>
                    NO MATTER YOUR MOTIVATION, WE CAN HELP
                </p>
                <h1>Are You...</h1>

                <div style={{display:'flex',flexWrap:'wrap'}}>
                    <MotivationIdea image={img1} h={h1} p={p1}/>
                    <MotivationIdea image={img2} h={h2} p={p2}/>
                    <MotivationIdea image={img3} h={h3} p={p3}/>
                    <MotivationIdea image={img4} h={h4} p={p4}/>
                    <MotivationIdea image={img5} h={h5} p={p5}/>
                    <MotivationIdea image={img6} h={h6} p={p6}/>
                </div>
            </div>
        </div>
     );
}
 
export default Motivation;