import React from 'react'
import WelcomeOtherPages from '../layout/WelcomeOtherPages';
import Heading from '../layout/Heading';
import SubHeadingAdmin from '../layout/SubHeadingAdmin';
import { Container } from 'react-bootstrap';


function Admin() {
    return (
        <>
            <WelcomeOtherPages />
            <Container>
                <Heading content="ADMIN PAGE" />
                <SubHeadingAdmin />
            </Container>
        </>
    )
}

export default Admin