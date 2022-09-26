import React from 'react'
import { FloatingLabel, Form, Container, Button, Row, Col } from 'react-bootstrap';
import Heading from './Heading';
import { Icon } from '@iconify/react';
import babyCarriage from '@iconify/icons-fa-solid/baby-carriage';
import birthdayIcon from '@iconify/icons-wpf/birthday';
import genderIntersexBold from '@iconify/icons-ph/gender-intersex-bold';
import weddingCake from '@iconify/icons-wpf/wedding-cake';
import balloonHeart from '@iconify/icons-bi/balloon-heart';
import { BASE_URL } from '../../constants/api';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import FormError from "../common/FormError";
import FormSent from '../common/FormSent';

const url = BASE_URL + "/enquiry-forms";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    phone: yup.string(),
    babyShower: yup.boolean(),
    birthday: yup.boolean(),
    genderReveal: yup.boolean(),
    wedding: yup.boolean(),
    otherEvent: yup.boolean(),
    message: yup.string().required("Please enter your message")
});

function EnquiryForm() {

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formSentMessage, setFormSentMessage] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setSubmitError(null);
        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setFormSentMessage(true);
        } catch (error) {
            console.log("error", error);
            setSubmitError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <Container id="enquiryForm">
                <Heading content="CONTACT US"></Heading>
                {submitError && <FormError>{submitError}</FormError>}
                {formSentMessage && <FormSent></FormSent>}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Row className="form__enquiry">
                        <Col sm={12} md={12} lg={6}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name*:"
                                className="mb-3"
                            >
                                <Form.Control type="name" placeholder="name" {...register("name")} />
                                {errors.name && <FormError>{errors.name.message}</FormError>}
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="E-mail*:"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="myemail@email.com" {...register("email")} />
                                {errors.email && <FormError>{errors.email.message}</FormError>}
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone number:"
                                className="mb-3"
                            >
                                <Form.Control type="phone number" placeholder="+47 99999999" {...register("phone")} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Party:</Form.Label>
                                <div className="form__options-party">
                                    <div>
                                        <Form.Check inline type="checkbox" label="Baby Shower" aria-label="BabyShower" key="BabyShower" {...register("babyShower")} /><Icon icon={babyCarriage} />
                                    </div>
                                    <div>
                                        <Form.Check inline type="checkbox" label="Birthday" aria-label="Birthday" key="Birthday" {...register("birthday")} /><Icon icon={birthdayIcon} />
                                    </div>
                                    <div>
                                        <Form.Check inline type="checkbox" label="Gender Reveal" aria-label="GenderReveal" key="GenderReveal" {...register("genderReveal")} /><Icon icon={genderIntersexBold} />
                                    </div>
                                    <div>
                                        <Form.Check inline type="checkbox" label="Wedding" aria-label="Wedding" key="Wedding" {...register("wedding")} /><Icon icon={weddingCake} />
                                    </div>
                                    <div>
                                        <Form.Check inline type="checkbox" label="Other event" aria-label="Other event" key="other" {...register("otherEvent")} /><Icon icon={balloonHeart} />
                                    </div>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Message*:"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '200px' }} {...register("message")} />
                                {errors.message && <FormError>{errors.message.message}</FormError>}
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <Button type="submit" className="btn-secondary">{submitting ? "Sending..." : "SEND"}</Button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </>
    );
}

export default EnquiryForm;