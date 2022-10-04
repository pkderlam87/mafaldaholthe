import React from 'react'
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Dropdown, Row, Col } from "react-bootstrap";
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
import SearchBar from './SearchBar';

const urlServices = BASE_URL + "/services";
/**
 * This function will provider the navbar
 * @returns <navbar>
 */
function NavBar() {
    //history constant use useNavigate() function from react-router-dom
    const history = useNavigate();
    //This useContext provider the token for authenticated users
    const [auth, setAuth] = useContext(AuthContext);
    const [showed, setShowed] = useState(false);

    function logout() {
        setAuth(null);
        history("/");
        setShowed(false);
    }
    //This constant use the reusable useApi to fetch the data from BASE_URL + "/services"
    const { data, isLoading, isError } = useApi(urlServices); if (isLoading) { return <div className="loading"></div>; } if (isError) {
        return <FormError>{isError}</FormError>;
    }
    return (
        <Container className="navbar" fluid>
            <Row>
                <Navbar expand="lg" expanded={showed}>
                    <Container>
                        <Col>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShowed(showed ? false : "show")} />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/" end className="nav__menu--item" onClick={() => setShowed(false)}><Icon icon={homeHeart} /> Home</NavLink>
                                    <Dropdown className="d-inline mx-2">
                                        <NavDropdown className="nav__menu--drop" title="Parties" id="dropdown-autoclose-true">
                                            {data.map((service) => {
                                                const { id, title } = service;
                                                return (
                                                    <NavLink key={id} to={`detail/${id}`} className="nav__menu--drop-item" onClick={() => setShowed(false)} >{title}</NavLink>
                                                )
                                            })}
                                        </NavDropdown>
                                    </Dropdown>
                                    <NavLink to="/about" className="nav__menu--item" onClick={() => setShowed(false)}><Icon icon={balloonHeart} /> About</NavLink>
                                    {auth ? (
                                        <>
                                            <NavLink to="/admin" className="nav__menu--item" onClick={() => setShowed(false)}><Icon icon={userAdmin} />Admin</NavLink>
                                            <div
                                                onClick={logout} className="nav__menu--item"><Icon icon={logoutLine} /> Logout</div>
                                        </>
                                    ) : (
                                        <NavLink to="/login" className="nav__menu--item" onClick={() => setShowed(false)}><Icon icon={loginLine} /> Login</NavLink>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col>
                            <Navbar.Brand href="/"><img src={logoBlack} className="main-logo" alt='logo'></img></Navbar.Brand>
                        </Col>
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