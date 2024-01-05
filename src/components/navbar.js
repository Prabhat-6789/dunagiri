import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
    const img = "https://static.wixstatic.com/media/9c6671_8cb1795cea994a6f9c1fbec9dc17450f~mv2.png/v1/fill/w_255,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/final%20header%20logo.png";
    return ( 
        <div style = {{display:'flex',backgroundColor:'white'}}>
            <div style={{padding:'15px'}}>
            <Link to="/">
                    <img src={img} alt="Description of the image" />
            </Link>
            </div>
            <div style={{display:'flex',marginTop:'20px',marginLeft:'35px',padding:'20px'}}>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>ABOUT US</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>ACCOMODATION</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>RETREATS</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>ACTIVITIES</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>GALLERY</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>BLOG</Link>
                <Link to="/" style={{textDecoration:'none',fontSize:'15px',color:'black',marginLeft:'15px'}}>CONTACT US</Link>
            </div>
        </div>
     );
}
 
export default Navbar;