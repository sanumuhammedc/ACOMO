import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Link from "next/link";

import car from "./images/hostel-1.jpg";

function MenuList() {
  return (
    <Card style={{ width: "18rem" }}>
      <Link style={{textDecoration: "none", color: "black"}} href="/hostellist">
        <Image className="d-block w-100 h-100" src={car} alt="First slide" />
        <Card.Body>
          <Card.Title>Usmans Hostel</Card.Title>
          <Card.Text>South Kalamassery</Card.Text>
          <Rating name="read-only" value={3} readOnly />
          <h6 className="p-0 m-0">Room Types</h6>
          <p className="p-0 m-0">Single Room</p>
          <p>Double Room</p>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MenuList;
