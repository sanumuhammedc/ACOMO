import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import Row from 'react-bootstrap/Row';

import car1 from "./images/hostel-1.jpg";
import car2 from "./images/hostel2.jpeg";
import car3 from "./images/hostelimage3.jpeg";
import car4 from "./images/hostelimage4.jpeg";
import car5 from "./images/hostelimage5.jpeg";
import car6 from "./images/hostelimage6.jpeg";


function HostelList() {
  return (
    <>
    <Row style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car1} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car2} alt="First slide" />
        <Card.Body>
          <Card.Title>Zakiyas Hostel</Card.Title>
          <Card.Text>Kalamassery</Card.Text>
          <Rating name="read-only" value={4} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Double Room</p>
          <p className="p-0 m-0">Triple Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car3} alt="First slide" />
        <Card.Body>
          <Card.Title>Olive Homes</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={5} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car4} alt="First slide" />
        <Card.Body>
          <Card.Title>Opal Homes</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={2} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car5} alt="First slide" />
        <Card.Body>
          <Card.Title>Aman Residency</Card.Title>
          <Card.Text>Kalamassery</Card.Text>
          <Rating name="read-only" value={2} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>
    
    </Row>



    <Row style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car1} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car2} alt="First slide" />
        <Card.Body>
          <Card.Title>Zakiyas Hostel</Card.Title>
          <Card.Text>Kalamassery</Card.Text>
          <Rating name="read-only" value={4} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Double Room</p>
          <p className="p-0 m-0">Triple Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car3} alt="First slide" />
        <Card.Body>
          <Card.Title>Olive Homes</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={5} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car4} alt="First slide" />
        <Card.Body>
          <Card.Title>Opal Homes</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={2} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car5} alt="First slide" />
        <Card.Body>
          <Card.Title>Aman Residency</Card.Title>
          <Card.Text>Kalamassery</Card.Text>
          <Rating name="read-only" value={2} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>
    
    </Row>



    <Row style={{display: "flex", alignItems: "center", justifyContent: "space-around"}} className="mt-4">
    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car6} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car1} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car2} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car3} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car4} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p className="p-0 m-0">Double Room</p>
        </Card.Body>
      </Link>
    </Card>
    
    </Row>
    </>
  );
}

export default HostelList;
