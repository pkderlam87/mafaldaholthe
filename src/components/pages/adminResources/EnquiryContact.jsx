import React from 'react';
import { useState, useEffect } from "react";
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import AdminMenu from '../../layout/adminLayout/AdminMenu';

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
            <Container>
                <AdminMenu />
                <Container>
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
                            {enquiries.map((enquiry) => {
                                return (
                                    <tbody key={enquiry.id}>
                                        <tr>
                                            <td>{enquiry.id}</td>
                                            <td>{enquiry.name}</td>
                                            <td>{enquiry.created_at}</td>
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