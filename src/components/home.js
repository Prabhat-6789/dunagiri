import Banner from "./banner";
import Contact from "./contact";
import Details from "./detail";
import Facility from "./facility";
import Feature from "./feature";
import Footer from "./footer";
import Founder from "./founder";
import GuestExp from "./guestExp";
import Guide from "./guide";
import Motivation from "./motivation";
import Quote from "./quote";
import Stats from "./stats";

const Home = () => {
    return ( 
        <div>
            <Banner/>
            <Feature/>
            <Details/>
            <Quote/>
            <Motivation/>
            <Stats/>
            <Guide/>
            <GuestExp/>
            <Facility/>
            <Founder/>
            <Contact/>
            <Footer/>
        </div>
     );
}
 
export default Home;