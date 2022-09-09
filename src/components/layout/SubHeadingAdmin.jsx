import React from 'react';
import { useContext } from 'react';
import AuthContext from "../context/AuthContext";

function SubHeadingAdmin(user) {
    const [auth, setAuth] = useContext(AuthContext);
    return (
        <h3 className='subHeading'>{auth.user.username} Admin</h3>
    )
}

export default SubHeadingAdmin
