const MotivationIdea = ({image,h,p}) => {
    return ( 
        <div style={{width:'210px'}}>
            <div>
                <img src={image} style={{color:'#00563B'}}/>
            </div>
            
            <div>
                {h}
            </div>

            <div>
                {p}
            </div>
        </div>
     );
}
 
export default MotivationIdea;