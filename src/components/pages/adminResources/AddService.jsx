import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container } from "react-bootstrap";
import Heading from '../../layout/Heading';
import FormError from "../../common/FormError";
import AdminMenu from '../../layout/adminLayout/AdminMenu';

const schema = yup.object().shape({
    name: yup.string().required("The service's name is required"),
    description: yup.string().required("The service's description is required"),
});

function AddService() {
    const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);

    const history = useNavigate();;
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    async function onSubmit(data) {
        setSubmitting(true);
        setServerError(null);

        data.status = "publish";

        console.log(data);

        try {
            const response = await http.post("/services", data);
            console.log("response", response.data);
            history.push("/admin");
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
            <Container>
                <AdminMenu />
                <Heading content="ADD SERVICE" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {serverError && <FormError>{serverError}</FormError>}
                    <fieldset disabled={submitting}>
                        <div>
                            <input name="name" placeholder="Name of service:" {...register("name")} />
                            {errors.title && <FormError>{errors.title.message}</FormError>}
                        </div>

                        <div>
                            <textarea name="description" placeholder="Description" {...register("description")} />
                        </div>
                        <button>{submitting ? "Submitting..." : "Submit"}</button>
                    </fieldset>
                </form>
            </Container>
        </>
    )
}

export default AddService