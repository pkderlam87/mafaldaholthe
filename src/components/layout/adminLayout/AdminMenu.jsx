import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminMenu() {
    return (
        <>
            <Nav className="me-auto admin_navbar">
                <Link to="/adminCommonContact" className="btn btn-primary btn-navbar"> Contact </Link>
                <Link to="/EnquiryContact" className="btn btn-primary btn-navbar"> Enquiry </Link>
                <Link to="/addService" className="btn btn-primary btn-navbar"> Add Service</Link>
            </Nav>
        </>
    )
}

export default AdminMenu;