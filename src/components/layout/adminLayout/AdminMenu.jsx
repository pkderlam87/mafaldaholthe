import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import contactMailOutline from '@iconify/icons-material-symbols/contact-mail-outline';
import licenseThirdParty from '@iconify/icons-carbon/license-third-party';
import circlePlus from '@iconify/icons-akar-icons/circle-plus';

/**
 * This function is the navbar/menu to the admin side, only for Authenticated users
 * @param {string} props - give a special className to the admin navbar 
 * @returns - HTML menu in the admin side, after the user login
 */

function AdminMenu(props) {
    return (
        <>
            <Nav className={`admin__navbar ${props.className}`}>
                <NavLink to="/adminCommonContact" className="admin__navbar--link"><Icon icon={contactMailOutline} /> Contact </NavLink>
                <NavLink to="/EnquiryContact" className="admin__navbar--link"><Icon icon={licenseThirdParty} /> Enquiry </NavLink>
                <NavLink to="/addService" className="admin__navbar--link"><Icon icon={circlePlus} /> Add Service</NavLink>

            </Nav>
        </>
    )
}

export default AdminMenu;