import React from 'react'
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from "../context/AuthContext";
import logoBlack from "../../Logo-MH-Balloon-Black-Text.png";
import { Icon } from '@iconify/react';
import userAdmin from '@iconify/icons-carbon/user-admin';
import homeHeart from '@iconify/icons-bx/home-heart';
import balloonHeart from '@iconify/icons-bi/balloon-heart';
import loginLine from '@iconify/icons-majesticons/login-line';
import logoutLine from '@iconify/icons-majesticons/logout-line';
import useApi from '../hooks/useAPI';
import { BASE_URL } from '../../constants/api';
import FormError from "../common/FormError";

const urlServices = BASE_URL + "/services";

function NavBar() {

    const history = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);

    function logout() {
        setAuth(null);
        history("/");
    }
    const { data, isLoading, isError } = useApi(urlServices); if (isLoading) { return <div className="loading"></div>; } if (isError) {
        return <FormError>{isError}</FormError>;
    }
    return (
        <Container className="navbar">
            <Row>
                <Navbar expand="lg">
                    <Container>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Col>
                        <Col>
                            <Navbar.Brand href="/"><img src={logoBlack} className="main-logo" alt='logo'></img></Navbar.Brand>
                        </Col>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" className="nav__menu--item"><Icon icon={homeHeart} /> Home</NavLink>
                                <NavDropdown className="nav__menu--drop" title="Parties" id="basic-nav-dropdown">
                                    {data.map((service) => {
                                        const { id, title } = service;
                                        return (
                                            <NavLink key={id} to={`detail/${id}`} className="nav__menu--drop-item">{title}</NavLink>
                                        )
                                    })}
                                </NavDropdown>
                                <NavLink to="/about" className="nav__menu--item"><Icon icon={balloonHeart} /> About</NavLink>
                                {auth ? (
                                    <>
                                        <NavLink to="/admin" className="nav__menu--item"><Icon icon={userAdmin} />Admin</NavLink>
                                        <div
                                            onClick={logout} className="nav__menu--item"><Icon icon={logoutLine} /> Logout</div>
                                    </>
                                ) : (
                                    <NavLink to="/login" className="nav__menu--item"><Icon icon={loginLine} /> Login</NavLink>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

export default NavBar;