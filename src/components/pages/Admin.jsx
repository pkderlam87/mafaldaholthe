import React from 'react'
import WelcomeOtherPages from '../layout/WelcomeOtherPages';
import Heading from '../layout/Heading';
import SubHeadingAdmin from '../layout/SubHeadingAdmin';

function Admin() {
    return (
        <>
            <WelcomeOtherPages />
            <Heading content="ADMIN PAGE" />
            <SubHeadingAdmin />
        </>
    )
}

export default Admin