import React from 'react';
import { useState, useEffect, useContext } from "react";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import AdminMenu from '../../layout/adminLayout/AdminMenu';
import AuthContext from "../../context/AuthContext";



function AdminCommonContact() {
    const [auth] = useContext(AuthContext);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {

        async function showContact() {

            try {
                const response = await http.get("/common-contact-forms");
                console.log("response", response.data);
                setContacts(response.data);

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
                {auth.user.role.type === "authenticated" ? (
                    <>
                        <AdminMenu />
                    </>
                ) : (
                    <>
                    </>
                )}
                <ul className="contacts">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        {contacts.map((contact) => {
                            return (
                                <tbody key={contact.id}>
                                    <tr>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.created_at}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.message}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </Table>
                </ul>
            </Container>
        </>
    )
}

export default AdminCommonContact