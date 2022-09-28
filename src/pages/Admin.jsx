import React from 'react'
import WelcomeOtherPages from '../components/layout/WelcomeOtherPages';
import Heading from '../components/layout/Heading';
import SubHeadingAdmin from '../components/layout/SubHeadingAdmin';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from "../components/context/AuthContext";
import AdminMenu from '../components/layout/adminLayout/AdminMenu';
import AdminCommonContact from './adminResources/CommonContact';

/**
 * This function will provide the admin content
 * If the user role type is authenticated the user can access the AdminMenu (common contact, enquiry contact and add service). But if the role type is not authenticated, the user can access only the common contact page. 
 * @returns <Admin>
 */

function Admin() {
    //This useContext provider the token for authenticated users
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