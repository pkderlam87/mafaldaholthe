import React from 'react';
import WelcomeOtherPages from '../../layout/WelcomeOtherPages';
import { Container } from "react-bootstrap";
import Heading from '../../layout/Heading';
import AdminMenu from '../../layout/adminLayout/AdminMenu';

function EnquiryContact() {
    return (
        <>
            <WelcomeOtherPages />
            <Container>
                <AdminMenu />
                <Heading content="ENQUIRY" />
            </Container>
        </>
    )
}

export default EnquiryContact