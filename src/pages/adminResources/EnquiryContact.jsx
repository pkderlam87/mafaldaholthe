import React from 'react';
import { useState, useEffect } from "react";
import WelcomeOtherPages from '../../components/layout/WelcomeOtherPages';
import { Container, Table } from "react-bootstrap";
import useAxios from "../../components/hooks/useAxios";
import AdminMenu from '../../components/layout/adminLayout/AdminMenu';
import Heading from '../../components/layout/Heading';
import FormError from '../../components/common/FormError';

/**
 * This function will print the get request to the endpoint "/enquiry-forms". Only the Authenticated user can access this feature.
 * @returns <table> with the data from the enquiry contact form, in the Detail page.
 */

function EnquiryContact() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {

        async function showContact() {

            try {
                const response = await http.get("/enquiry-forms");
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

    if (error) return <FormError>{error}</FormError>;
    return (
        <>
            <WelcomeOtherPages />
            <AdminMenu className="admin__navbar--inside" breadcrumb="active" />
            <Container className="admin__wrapper">
                <Heading content="ENQUIRY" />
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
        </>
    )
}

export default EnquiryContact