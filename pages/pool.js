import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SectionNav from "../Components/SectionNav";
import Typography from '@mui/material/Typography';

function pool() {
    return (
        <div>
            <SectionNav title="Hostels" link="/hostels" />
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Find Your Prefered Room mate through our inhouse algorithm<br />
                Fill Your Preferences Below
            </Typography>
            <Form className='m-4'>
                <Form.Group className="mb-3" >
                    <Form.Label>Prefered Location For Mate</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preferred Profession Of Mate</Form.Label>
                    <Form.Control type="text" placeholder="Enter Profession" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Other Preferences</Form.Label>
                    <Form.Control type="text" placeholder="Other Preferences" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Strictly Follow Preferences" />
                </Form.Group>
                <Button variant="primary" href='/poollist' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default pool;