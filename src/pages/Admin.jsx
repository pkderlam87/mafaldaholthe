import React from 'react'
import WelcomeOtherPages from '../components/layout/WelcomeOtherPages';
import Heading from '../components/layout/Heading';
import SubHeadingAdmin from '../components/layout/SubHeadingAdmin';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from "../components/context/AuthContext";
import AdminMenu from '../components/layout/adminLayout/AdminMenu';
import AdminCommonContact from './adminResources/CommonContact';



function Admin({ children }) {
    const [auth] = useContext(AuthContext);
    return (
        <>
            <WelcomeOtherPages />
            <div className="admin__wrapper">
                <Container>
                    <Heading content="ADMIN PAGE" />
                    <SubHeadingAdmin />
                    {auth.user.role.type === "authenticated" ? (
                        <>
                            <AdminMenu />
                        </>
                    ) : (
                        <>
                            <AdminCommonContact />
                        </>
                    )}
                </Container>
            </div>
        </>
    )
}

export default Admin