import Link from "next/link";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function GridExample({ title, content, link }) {
  return (
    <Link style={{textDecoration: "none", color: "black"}} href={link}>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}

export default GridExample;
