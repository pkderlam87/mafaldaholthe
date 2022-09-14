import React from 'react';
import { useState, useEffect } from "react";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Heading from '../../layout/Heading';
//import { BASE_URL } from '../../../constants/api';
import useAxios from "../../hooks/useAxios";
import AdminMenu from '../../layout/adminLayout/AdminMenu';
//import { useContext } from "react";
//import AuthContext from '../context/AuthContext';
//import axios from 'axios';


function AdminCommonContact() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {

        async function showContact() {

            try {
                const response = await http.get("/common-contact-forms");
                console.log("response", response.data);
                setPosts(response.data);

            } catch (error) {
                console.log("error", error);
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        showContact();
    }, []);
    if (loading) return <div>Loading posts...</div>;

    if (error) return <div>{ }</div>;

    return (
        <>
            <WelcomeOtherPages />
            <Container>
                <AdminMenu />
                <Heading content="CONTACT" />
                <ul className="posts">
                    {posts.map((media) => {
                        return (
                            <li key={media.id}>
                                <Link to={`/dashboard/posts/edit/${media.id}`}>{media.title.rendered}</Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </>
    )
}

export default AdminCommonContact