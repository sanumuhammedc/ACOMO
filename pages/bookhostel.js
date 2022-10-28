import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SectionNav from "../Components/SectionNav";
import Typography from '@mui/material/Typography';

export default function bookhostel() {
  return (
    <div>
      <SectionNav title="Hostels" link="/hostels" />
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Book Now
            </Typography>
            <Form className='m-4'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control type="text" placeholder="Enter Profession" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                </Form.Group>
                <Button variant="primary" href='/' type="submit">
                    Pay and Confirm
                </Button>
            </Form>
    </div>
  );
}
