import React from 'react'
import { FloatingLabel, Form, Container } from 'react-bootstrap';
import Heading from './Heading';
import { Icon } from '@iconify/react';
import babyCarriage from '@iconify/icons-fa-solid/baby-carriage';
import birthdayIcon from '@iconify/icons-wpf/birthday';
import genderIntersexBold from '@iconify/icons-ph/gender-intersex-bold';
import weddingCake from '@iconify/icons-wpf/wedding-cake';

function ContactForm() {
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Party*:</Form.Label>
                    <div className="mb-3">
                        <Form.Check inline type="checkbox" label="Baby Shower" aria-label="BabyShower" key="BabyShower" /><Icon icon={babyCarriage} />
                    </div>
                    <div className="mb-3">
                        <Form.Check inline type="checkbox" label="Birthday" aria-label="Birthday" key="Birthday" /><Icon icon={birthdayIcon} />
                    </div>
                    <div className="mb-3">
                        <Form.Check inline type="checkbox" label="Gender Reveal" aria-label="GenderReveal" key="GenderReveal" /><Icon icon={genderIntersexBold} />
                    </div>
                    <div className="mb-3">
                        <Form.Check inline type="checkbox" label="Wedding" aria-label="Wedding" key="Wedding" /><Icon icon={weddingCake} />
                    </div>
                </Form.Group>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Message*:"
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '200px' }} />
                </FloatingLabel>
            </Container>
        </>
    );
}

export default ContactForm;