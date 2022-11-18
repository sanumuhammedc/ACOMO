import HostelImages from "../Components/HostelImages";
import Footer from "../Components/Footer";
import Review from "../Components/Review";
import SectionNav from "../Components/SectionNav";

export default function hostellist() {
  return (
    <div>
      <SectionNav title="Hostels" link="/hostels"/>
        <HostelImages/>
         <Review/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.666480511258!2d76.3300326!3d10.0443446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb4551c2a9a4b718!2sUsman&#39;s%20Hostel!5e0!3m2!1sen!2sin!4v1666918025290!5m2!1sen!2sin" width="600" height="450" style={{border:"0", width: "100%", margin: "2rem", marginBottom:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <Footer/>
    </div>
  )
}
