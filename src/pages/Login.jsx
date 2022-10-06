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
import FormError from '../components/common/FormError';


const url = BASE_URL + TOKEN_PATH;
/**
 * YUP will verify the data requirements and show an error message if something is wrong 
 */
const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});
/**
 * This function has a form to the user login in the admin side.
 * @returns <Login><Form>
 */
function Login() {
    const [submitting, setSubmitting] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const history = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    //This useContext provider the token for authenticated users
    const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
        setSubmitting(true);
        setLoginError(null);

        try {
            //If the user provides the correct username and password "auth" is updated, and the authenticated user goes to the admin page.  
            const response = await axios.post(url, data);
            setAuth(response.data);
            history("/admin");
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
            <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                {loginError && <FormError>{loginError}</FormError>}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="username" name="username" placeholder="Username" {...register("identifier")} />
                    {errors.identifier && <FormError>{errors.identifier.message}</FormError>}
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <FormError>{errors.password.message}</FormError>}
                </FloatingLabel>
                <button className='btn btn-secondary'>{submitting ? "Login in..." : "Login"}</button>
            </form>
        </div>
    </>
    );

}

export default Login