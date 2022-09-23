import React from 'react'
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import foodCake12Regular from '@iconify/icons-fluent/food-cake-12-regular';
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
    const { data, isLoading, isError } = useApi(urlServices); if (isLoading) { return <div className="loading"></div>; } if (isError) {
        return <div>Has error</div>;
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
                                <Link to="/" className="nav__menu--item"><Icon icon={homeHeart} /> Home</Link>
                                <Icon icon={foodCake12Regular} /><NavDropdown className="nav__menu--drop" title="Parties" id="basic-nav-dropdown">
                                    {data.map((service) => {
                                        const { id, title } = service;
                                        return (
                                            <Link key={id} to={`detail/${id}`} className="nav__menu--drop-item">{title}</Link>
                                        )
                                    })}
                                </NavDropdown>
                                <Link to="/about" className="nav__menu--item"><Icon icon={balloonHeart} /> About</Link>
                                {auth ? (
                                    <>
                                        <Link to="/admin" className="nav__menu--item"><Icon icon={userAdmin} />Admin</Link>
                                        <div
                                            onClick={logout} className="nav__menu--item"><Icon icon={logoutLine} /> Logout</div>
                                    </>
                                ) : (
                                    <Link to="/login" className="nav__menu--item"><Icon icon={loginLine} /> Login</Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <Col>
                        <SearchBar />
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
}

export default NavBar;