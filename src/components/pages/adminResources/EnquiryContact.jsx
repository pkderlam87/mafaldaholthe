import React from 'react';
import { useState, useEffect } from "react";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import AdminMenu from '../../layout/adminLayout/AdminMenu';
import Heading from '../../layout/Heading';

function EnquiryContact() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {

        async function showContact() {

            try {
                const response = await http.get("/enquiry-forms");
                console.log("response", response.data);
                setEnquiries(response.data);

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
                <AdminMenu className="admin__navbar--inside" breadcrumb="active" />
                <Container>
                    <Heading content="ENQUIRY" />
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
                            {enquiries.map((enquiry) => {
                                return (
                                    <tbody key={enquiry.id}>
                                        <tr>
                                            <td>{enquiry.created_at.slice(0, -5)}</td>
                                            <td>{enquiry.name}</td>
                                            <td>{enquiry.email}</td>
                                            <td>{enquiry.message}</td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </Table>
                    </ul>
                </Container>

            </Container>
        </>
    )
}

export default EnquiryContact