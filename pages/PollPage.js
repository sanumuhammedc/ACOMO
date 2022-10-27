import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample() {
    return (
        <div>
            <h1 class="bg-secondary m-3 p-2 rounded d-inline-block text-white">Join Pooling</h1>
            <div style={{textAlign: 'center'}}>
            <Form className='d-inline-flex'>
                <fieldset >
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Place</Form.Label>
                        <Form.Control id="TextInput" placeholder="input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect">Year</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Branch</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Course</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="input" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
            </div>
        </div>
    );
}

export default FormDisabledExample;