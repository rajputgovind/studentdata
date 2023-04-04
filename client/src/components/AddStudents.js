import { useState } from "react";
import { Alert, Button, Container, Form, Row ,Col} from "react-bootstrap";

import axios from "axios";


export function AddStudents() {
    const [formData, setFormData] = useState({});
    const [isInserted, setIsInserted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
       const response = await axios.post(`http://localhost:5000/students`,formData)

        console.log(response.data)
        if (response.status == 201) {
            setIsInserted(true)
            setTimeout(() => {
                setIsInserted(false);
            }, 2000);
        }
    }

    return (
        <>
            <Container className="mt-5 text center">
                <Alert>Add a new Students</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="enter Name" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>phone</Form.Label>
                                <Form.Control type="text" name='phone' placeholder="enter phone" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" name='email' placeholder="enter email" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>class</Form.Label>
                                <Form.Control type="Number" name='class' placeholder="enter class" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                {/* <Form.Label>Quantity</Form.Label> */}
                                {/* <Form.Control type="text" name='pQty' placeholder="enter avalible quantity" onChange={handleChange}/> */}
                                <Form.Label>marks</Form.Label>
                                <Form.Control type="Number" name='marks' placeholder="enter marks" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button type="submit" variant="success">Add Product</Button>
                </Form>
            </Container>
            {
                isInserted ? 
                <Container className="mt-5">
                    <Row>
                        <Col lg={4}>
                            <Alert variant="success">Product added successfully...! </Alert>
                        </Col>
                    </Row>
                </Container>:null
            }
        </>
    );
}