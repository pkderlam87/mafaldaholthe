import React from 'react';
import { FloatingLabel, Form, Container, Button } from 'react-bootstrap';
import Heading from './Heading';
import { BASE_URL } from '../../constants/api';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import axios from "axios";


const url = BASE_URL + "/common-contact-forms";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required("Please enter your email"),
    phone: yup.string(),
    message: yup.string().required("Please enter your message"),
});

function CommonContact() {
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setSubmitError(null);
        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
        } catch (error) {
            console.log("error", error);
            setSubmitError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <Container className="home__contact-form">
                <Heading content="CONTACT US"></Heading>
                {submitError && <span>{submitError}</span>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name*:"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="name" {...register("name")} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="E-mail*:"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="email" {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone number:"
                        className="mb-3"
                    >
                        <Form.Control type="phone number" placeholder="phone number" {...register("phone")} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Message*:"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="message" style={{ height: '200px' }} {...register("message")} />
                        {errors.message && <span>{errors.message.message}</span>}
                    </FloatingLabel>
                    <Button type="submit" className="btn-secondary">{submitting ? "Sending..." : "SEND"}</Button>
                </form>
            </Container>
        </>
    )
}

export default CommonContact