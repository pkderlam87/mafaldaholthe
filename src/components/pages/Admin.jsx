import React from 'react'
import WelcomeOtherPages from '../layout/WelcomeOtherPages';
import Heading from '../layout/Heading';
import SubHeadingAdmin from '../layout/SubHeadingAdmin';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from "../context/AuthContext";
import AdminMenu from '../layout/adminLayout/AdminMenu';
import AdminCommonContact from './adminResources/CommonContact';



function Admin({ children }) {
    const [auth] = useContext(AuthContext);
    return (
        <>
            <WelcomeOtherPages />
            <Container>
                <Heading content="ADMIN PAGE" />
                <SubHeadingAdmin />
                {auth.user.role.type === "authenticated" ? (
                    <>
                        <AdminMenu />
                        {children ? children : <p></p>}
                    </>
                ) : (
                    <>
                        <AdminCommonContact />
                    </>
                )}
            </Container>
        </>
    )
}

export default Admin