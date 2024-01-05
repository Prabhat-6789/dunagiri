const Quote = () => {
    return ( 
        <div style={{display:'flex',
                    justifyContent:'space-around',
                    backgroundColor:'#1B4D3E',
                    marginTop:'15px',
                    color:'white'}}>
            <div style={{textAlign:'center',paddingLeft:'40px',paddingRight:'40px',marginRight:'20px'}}>
                <p style={{fontFamily:'Sans-serif',fontSize:'40px'}}>
                    Reconnect with your mind and body.
                </p>
            </div>

            <div style={{paddingLeft:'50px',paddingRight:'50px',paddingTop:'10px'}}>
                <p style={{fontFamily:'Cursive',fontSize:'30px'}}>
                    “Keep close to Nature's heart...and break clear away, 
                    once in a while, and climb a mountain or spend a week in the woods.
                    Wash your spirit clean.”
                </p>

                <p>
                    ______
                </p>
                <p style={{fontFamily:'Cursive',fontSize:'30px'}}>
                    John Muir
                </p>
            </div>
        </div>
     );
}
 
export default Quote;