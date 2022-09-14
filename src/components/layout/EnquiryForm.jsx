import React from 'react'
import { FloatingLabel, Form, Container, Button } from 'react-bootstrap';
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
            <Container>
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
                        <Form.Control type="email" placeholder="myemail@email.com" {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone number:"
                        className="mb-3"
                    >
                        <Form.Control type="phone number" placeholder="+47 99999999" {...register("phone")} />
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Party*:</Form.Label>
                        <div className="mb-3">
                            <Form.Check inline type="checkbox" label="Baby Shower" aria-label="BabyShower" key="BabyShower" {...register("babyShower")} /><Icon icon={babyCarriage} />
                        </div>
                        <div className="mb-3">
                            <Form.Check inline type="checkbox" label="Birthday" aria-label="Birthday" key="Birthday" {...register("birthday")} /><Icon icon={birthdayIcon} />
                        </div>
                        <div className="mb-3">
                            <Form.Check inline type="checkbox" label="Gender Reveal" aria-label="GenderReveal" key="GenderReveal" {...register("genderReveal")} /><Icon icon={genderIntersexBold} />
                        </div>
                        <div className="mb-3">
                            <Form.Check inline type="checkbox" label="Wedding" aria-label="Wedding" key="Wedding" {...register("wedding")} /><Icon icon={weddingCake} />
                        </div>
                        <div className="mb-3">
                            <Form.Check inline type="checkbox" label="Other event" aria-label="Other event" key="other" {...register("otherEvent")} /><Icon icon={balloonHeart} />
                        </div>
                    </Form.Group>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Message*:"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '200px' }} {...register("message")} />
                        {errors.message && <span>{errors.message.message}</span>}
                    </FloatingLabel>
                    <Button type="submit" className="btn-secondary">{submitting ? "Sending..." : "SEND"}</Button>
                </form>
            </Container>
        </>
    );
}

export default EnquiryForm;