import React from 'react';
import { useContext } from 'react';
import AuthContext from "../context/AuthContext";
/**
 * This function is the subheading to the admin side, only for Authenticated users. It shows the logged username.
 * @returns - <h3>
 */

function SubHeadingAdmin() {
    const [auth] = useContext(AuthContext);
    return (
        <h3 className='subHeading'>{auth.user.username} Admin</h3>
    )
}

export default SubHeadingAdmin
