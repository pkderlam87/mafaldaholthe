import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../components/hooks/useAxios";
import WelcomeOtherPages from '../../components/layout/WelcomeOtherPages';
import { Container, FloatingLabel, Form } from "react-bootstrap";
import Heading from '../../components/layout/Heading';
import FormError from "../../components/common/FormError";
import AdminMenu from '../../components/layout/adminLayout/AdminMenu';

const schema = yup.object().shape({
    title: yup.string().required("The service's title is required"),
    description: yup.string().required("The service's description is required"),
    files: yup.mixed()
});

function AddService() {
    const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);

    const history = useNavigate();;
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    async function onSubmit(inputData) {
        setSubmitting(true);
        setServerError(null);

        inputData.status = "publish";

        const formData = new FormData();
        for (const image of inputData.files) {
            formData.append('files.images', image);
        }
        const { image, ...data } = inputData;
        formData.append("data", JSON.stringify(data));
        try {
            const response = await http.post("/services", formData);
            console.log("response", response.data);
            history("/admin");
        } catch (error) {
            console.log("error", error);
            setServerError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <WelcomeOtherPages />

            <AdminMenu className="admin__navbar--inside" breadcrumb="active" />
            <Container className="admin__wrapper">
                <Heading content="ADD SERVICE" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {serverError && <FormError>{serverError}</FormError>}
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title of service*:"
                        className="mb-3"
                    >
                        <Form.Control type="title" placeholder="title" {...register("title")} />
                        {errors.title && <FormError>{errors.title.message}</FormError>}
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Description*:"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" type="description" placeholder="description" style={{ height: '200px' }} {...register("description")} />
                        {errors.description && <FormError>{errors.description.message}</FormError>}
                    </FloatingLabel>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose three photos to this new service*</Form.Label>
                        <Form.Control type="file" multiple {...register("files")} />
                    </Form.Group>
                    <button className="btn btn-secondary">{submitting ? "Submitting..." : "Submit"}</button>
                </form>
            </Container>
        </>
    )
}

export default AddService;