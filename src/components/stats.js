const Stats = () => {
    return ( 
        <div style={{paddingLeft:'60px',
                    paddingRight:'60px',
                    paddingTop:'30px',
                    paddingBottom:'30px',
                    backgroundColor:'#1B4D3E',
                    marginTop:'20px',
                    color:'white'}}>
            <div>
                <p style={{fontSize:'20px'}}>OUR NUMBERS SPEAK FOR THEMSELVES</p>
            </div>

            <div>
                <h1 style={{fontSize:'40px'}}>Guests Experience Lasting Benefits</h1>
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div>
                    <div>
                        <h1 style={{fontSize:'70px'}}>30%</h1>
                    </div>
                    <div>
                        <p style={{fontFamily:'Cursive',fontSize:'20px'}}>
                            Decrease in anxiety while staying at Dunagiri Retreat.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <h1 style={{fontSize:'70px'}}>26%</h1>
                        </div>
                        <div>
                            <p style={{fontFamily:'Cursive',fontSize:'20px'}}>
                                Improvement in sleep during and post visit.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 style={{fontSize:'70px'}}>16%</h1>
                    </div>
                    <div>
                        <p style={{fontFamily:'Cursive',fontSize:'20px'}}>
                            Improvement in self-compassion after a 5-night stay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Stats;