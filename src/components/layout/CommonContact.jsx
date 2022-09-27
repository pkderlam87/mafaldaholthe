import React, { useState } from 'react';
import { FloatingLabel, Form, Row, Col } from 'react-bootstrap';
import Heading from './Heading';
import { BASE_URL } from '../../constants/api';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "../common/FormError";
import FormSent from '../common/FormSent';
//import SendEmail from '../common/SendEmail';



const url = BASE_URL + "/common-contact-forms";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    phone: yup.string(),
    message: yup.string().required("Please enter your message"),
});

function CommonContact() {
    const [submitting, setSubmitting] = useState(false);
    //const [contact, setContact] = useState(null);
    const [submitError, setSubmitError] = useState(null);
    const [formSentMessage, setFormSentMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setSubmitError(null);
        try {
            const response = await axios.post(url, data);
            setFormSentMessage(true);
            console.log("response", response.data);
            // reset form
            reset({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            //SendEmail(response);
        } catch (error) {
            console.log("error", error);
            setSubmitError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <div className="home__contact-form">
                <Heading content="CONTACT US"></Heading>
                {submitError && <FormError>{submitError}</FormError>}
                {formSentMessage && <FormSent></FormSent>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
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
                                <Form.Control type="email" placeholder="email" {...register("email")} />
                                {errors.email && <FormError>{errors.email.message}</FormError>}
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone number:"
                                className="mb-3"
                            >
                                <Form.Control type="phone number" placeholder="phone number" {...register("phone")} />
                            </FloatingLabel>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Message*:"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="message" style={{ height: '200px' }} {...register("message")} />
                                {errors.message && <FormError>{errors.message.message}</FormError>}
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <button type="submit" className="btn-secondary">{submitting ? "Sending..." : "SEND"}</button>
                </form>
            </div>
        </>
    )
}

export default CommonContact