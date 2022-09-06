import React from 'react';
import { FloatingLabel, Form, Container } from 'react-bootstrap';
import Heading from './Heading';

function CommonContact() {
    return (
        <>
            <Container>
                <Heading content="CONTACT US"></Heading>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name*:"
                    className="mb-3"
                >
                    <Form.Control type="name" placeholder="name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="E-mail*:"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="myemail@email.com" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Phone number*:"
                    className="mb-3"
                >
                    <Form.Control type="phone number" placeholder="+47 99999999" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Message*:"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '200px' }} />
                </FloatingLabel>
            </Container>
        </>
    )
}

export default CommonContact