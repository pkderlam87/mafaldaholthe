import React from 'react'
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../constants/api";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/context/AuthContext';
import Heading from '../components/layout/Heading';
import { FloatingLabel, Form } from 'react-bootstrap';
import WelcomeOtherPages from '../components/layout/WelcomeOtherPages';


const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

function Login() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const history = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        try {
            const response = await axios.post(url, data);
            console.log("response", response.data);
            setAuth(response.data);
            history("/admin");
            console.log(auth);
        } catch (error) {
            console.log("error", error);
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    return (<>
        <WelcomeOtherPages />
        <div className="login">
            <Heading content="Log in"></Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <span>{loginError}</span>}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="username" name="username" placeholder="Username" {...register("identifier")} />
                    {errors.identifier && <span>{errors.identifier.message}</span>}
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <span>{errors.password.message}</span>}
                </FloatingLabel>
                <button className='btn btn-secondary'>{submitting ? "Login in..." : "Login"}</button>
            </form>
        </div>
    </>
    );

}

export default Login