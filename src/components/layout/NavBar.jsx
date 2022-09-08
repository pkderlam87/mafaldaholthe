import React from 'react'
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import logoBlack from "../../Logo-MH-Balloon-Black-Text.png";
import { Icon } from '@iconify/react';

import homeHeart from '@iconify/icons-bx/home-heart';
import balloonHeart from '@iconify/icons-bi/balloon-heart';
import loginLine from '@iconify/icons-majesticons/login-line';
import logoutLine from '@iconify/icons-majesticons/logout-line';
import useApi from '../hooks/useAPI';
import { BASE_URL } from '../../constants/api';
import SearchBar from './SearchBar';

const urlServices = BASE_URL + "/services";

function NavBar() {

    const history = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);

    function logout() {
        setAuth(null);
        history("/");
    }
    const { data, isLoading, isError } = useApi(urlServices); if (isLoading) { return <div>Loading</div>; } if (isError) {
        return <div>Has error</div>;
    }
    return (
        <Container>
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
                                <Link to="/" className="btn btn-primary btn-navbar"><Icon icon={homeHeart} /> Home</Link>
                                <NavDropdown title="Parties" id="basic-nav-dropdown">
                                    <NavDropdown.Item><Link to="/detail" className="btn btn-primary btn-navbar">{data.title}</Link></NavDropdown.Item>
                                </NavDropdown>
                                <Link to="/about" className="btn btn-primary btn-navbar"><Icon icon={balloonHeart} /> About</Link>
                                {auth ? (
                                    <>
                                        | <Link to="/admin" className="btn btn-primary btn-navbar">Admin</Link> | <Button
                                            onClick={logout} className="btn-navbar"><Icon icon={logoutLine} /> Logout</Button>
                                    </>
                                ) : (
                                    <Link to="/login" className="btn btn-primary btn-navbar"><Icon icon={loginLine} /> Login</Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                        <Col>
                            <SearchBar />
                        </Col>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

export default NavBar;