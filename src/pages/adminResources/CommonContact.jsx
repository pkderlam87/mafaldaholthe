import React from 'react';
import { useState, useEffect, useContext } from "react";
import WelcomeOtherPages from '../../components/layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../components/hooks/useAxios";
import AdminMenu from '../../components/layout/adminLayout/AdminMenu';
import Heading from '../../components/layout/Heading';
import AuthContext from "../../components/context/AuthContext";
import FormError from "../../components/common/FormError";


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

    if (error) return <FormError>{error}</FormError>;

    return (
        <>
            {auth.user.role.type === "authenticated" ? (
                <>
                    <WelcomeOtherPages />
                    <AdminMenu className="admin__navbar--inside" />
                </>
            ) : (
                <>
                </>
            )}
            <Container className="admin__wrapper">
                <Heading content="CONTACT" />
                <ul className="contacts">
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
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