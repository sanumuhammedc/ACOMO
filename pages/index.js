// import Image from 'next/image'
import Head from "next/head";

import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navigation";
// import styles from "../styles/Home.module.css";
import Row from 'react-bootstrap/Row';


const List = [{title:"Hostel",content:"Search For Hostels Near You, get rooms at afordable rate. Find room mate fit to you",link: "/hostels"}, 
              {title:"Paying Guest",content:"Search For PG's Near You, get rooms at afordable rate. Find room mate fit to you",link: "/pgs" }, 
              {title:"Mess",content:"Search For Mess Near You, get Food at afordable rate. Eat healthy food",link: "/mess" },
              {title:"Restaurants",content:"Want't to try new reciepies, Browse the restaurants suggested by our users", link: "/restaurants" }]

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACCOMO</title>
      </Head>
      <Navbar style={{position: "sticky"}} />
      <Slider />
      <Row xs={1} md={2} className="g-4 p-4">
      {List.map((Item)=>
        <Main {...Item} key={Item.title}/>
      )}
      </Row>
      <Footer />
    </div>
  );
}
