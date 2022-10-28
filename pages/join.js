import Navigation from "../Components/Navigation";
import Head from "next/head";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography';

export default function join() {
  return (
    <>
      <Head>
        <title>ACCOMO | JOIN</title>
      </Head>
      <Navigation />
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Join Us and Grow Your Hostels, PG, Mess and Restaurant
      </Typography>
      <Form className='m-4'>
       <div className="d-flex justify-content-between">
        <p>Tick Your institution category: </p>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Hostel" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="PG" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Restaurant" />
                </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Mess" />
        </Form.Group>
       </div>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" />
        </Form.Group>
        <Button variant="primary" href='/' type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
