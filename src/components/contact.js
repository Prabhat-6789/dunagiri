import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { GoThumbsup } from "react-icons/go";
import { useState } from "react";
import './contact.css';
const Contact = () => {
    const [check,setCheck] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
      });

      const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
      });

      const image1 = "https://static.wixstatic.com/media/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_60c5fc4a3ecd49f2a697206b09eeace1~mv2.png";
      const image2 = "https://static.wixstatic.com/media/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6e9638ad803e4099a6116eb750b5a584~mv2.png";
      const image3 = "https://static.wixstatic.com/media/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_366f7fdbcafc4effaeddb0dba92014c1~mv2.png";

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        // Clear the error message when the user starts typing
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      };
    
      const validateForm = () => {
        let valid = true;
    
        // Validate name
        if (!formData.name.trim()) {
          setFormErrors({
            ...formErrors,
            name: 'Please enter your name',
          });
          valid = false;
        }
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setFormErrors({
            ...formErrors,
            email: 'Please enter a valid email address',
          });
          valid = false;
        }
    
        // Validate phone
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
          setFormErrors({
            ...formErrors,
            phone: 'Please enter a valid 10-digit phone number',
          });
          valid = false;
        }
    
        // Validate address
        if (!formData.address.trim()) {
          setFormErrors({
            ...formErrors,
            address: 'Please enter your address',
          });
          valid = false;
        }
    
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Form submission logic
          setTimeout(()=>{setCheck(true)},1000);
          console.log('Form submitted:', formData);
        } 
        
        else {
          console.log('Form not submitted due to validation errors');
        }
      };

    return ( 
        <div style={{marginTop:'15px',display:'flex',justifyContent:'space-between',borderTop:'2px solid blue'}}>
            <div style={{marginLeft:'70px'}}>
                <div style={{marginTop:'90px'}}>
                    <h1>Contact Us</h1>
                </div>

                <div style={{display:'flex'}}>
                    <div style={{margin:'20px'}}>
                        <IoLocationOutline/>
                    </div>
                    <div style={{width:'300px'}}>
                        <p style={{fontFamily:'cursive'}}>
                            Dunagiri Retreat, Village Chari, 
                            Near Mahavatar Babaji's Cave, Block, 
                            Dwarahat, Uttarakhand 263653 India
                        </p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <div style={{margin:'20px'}}>
                        <MdOutlinePhone />
                    </div>
                    <div>
                        <p style={{fontFamily:'cursive'}}>
                            +91 98102 67719 
                        </p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <div style={{margin:'20px'}}>
                        <CiMail />
                    </div>
                    <div>
                        <p style={{fontFamily:'cursive'}}>
                            delighted@dunagiri.com
                        </p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <div style={{margin:'20px'}}>
                        <GoThumbsup />
                    </div>

                    <div style={{display:'flex'}}>
                        <img src={image1} style={{marginRight:'10px'}}/>
                        <img src={image2} style={{marginRight:'10px'}}/>
                        <img src={image3}/>
                    </div>
                </div>
            </div>

            <div className="payment-form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.name}</p>
                </div>

                <div>
                    <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.email}</p>
                </div>

                <div>
                    <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    </label>
                    <p className="error">{formErrors.phone}</p>
                </div>

                <div>
                    <label>
                    Message:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                    </label>
                    <p className="error">{formErrors.address}</p>
                </div>

                <div style={{marginLeft:'40px'}}>
                    <button type="submit" className="custom-button">SEND</button>
                </div>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;