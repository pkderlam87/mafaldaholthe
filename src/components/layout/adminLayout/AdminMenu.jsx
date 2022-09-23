import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import contactMailOutline from '@iconify/icons-material-symbols/contact-mail-outline';
import licenseThirdParty from '@iconify/icons-carbon/license-third-party';
import circlePlus from '@iconify/icons-akar-icons/circle-plus';

function AdminMenu(props) {
    return (
        <>
            <Nav className={`admin__navbar ${props.className}`}>
                <Link to="/adminCommonContact" className="admin__navbar--link"><Icon icon={contactMailOutline} /> Contact </Link>
                <Link to="/EnquiryContact" className="admin__navbar--link"><Icon icon={licenseThirdParty} /> Enquiry </Link>
                <Link to="/addService" className="admin__navbar--link"><Icon icon={circlePlus} /> Add Service</Link>

            </Nav>
        </>
    )
}

export default AdminMenu;