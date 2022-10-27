// import Image from 'next/image'
import Head from "next/head";

import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navigation";
// import styles from "../styles/Home.module.css";
import Row from 'react-bootstrap/Row';


const List = [{title:"Hostel",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatem?",link: "/hostels"}, 
              {title:"Paying Guest",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatem?",link: "/pgs" }, 
              {title:"Mess",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatem?",link: "/mess" },
              {title:"Restaurants",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatem?", link: "/restaurants" }]

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACOMO</title>
      </Head>
      <Navbar style={{position: "sticky"}} />
      <Slider />
      <Row xs={1} md={2} className="g-4 p-4">
      {List.map((Item)=>
        <Main {...Item} key={Item.title}/>
      )}
      </Row>
      {/* <Footer /> */}
    </div>
  );
}
