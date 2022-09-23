import React from 'react';
import { useState, useEffect, useContext } from "react";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import AdminMenu from '../../layout/adminLayout/AdminMenu';
import Heading from '../../layout/Heading';
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
    }, [http]);
    if (loading) return <div className="loading"></div>;

    if (error) return <div>{ }</div>;

    return (
        <>
            <WelcomeOtherPages />
            <Container className="admin__wrapper">
                {auth.user.role.type === "authenticated" ? (
                    <>
                        <AdminMenu className="admin__navbar--inside" breadcrumb="active" />
                    </>
                ) : (
                    <>
                    </>
                )}
                <Heading content="CONTACT" />
                <ul className="contacts">
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
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
                                        <td>{contact.created_at.slice(0, -5)}</td>
                                        <td>{contact.name}</td>
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