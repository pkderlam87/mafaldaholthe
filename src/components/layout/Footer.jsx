import React from 'react';
import logoBeige from "../../Logo-MH-Balloon-Beige-Text.png";
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-uil/instagram';
import facebookSquare from '@iconify/icons-la/facebook-square';
import pinterestSquare from '@iconify/icons-jam/pinterest-square';
import Paragraph from './Paragraph';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col>
                            <a href="/"><img src={logoBeige} className="secondary-logo" alt='logo'></img></a>
                        </Col>
                        <Col className="social-media__icons">
                            <Col>
                                <a href="https://www.instagram.com/mafaldaholthe_styling/" className="social-media__icon"><Icon icon={instagramIcon} /></a>
                            </Col>
                            <Col>
                                <a href="https://www.facebook.com/mafaldaholthe" className="social-media__icon"><Icon icon={facebookSquare} /></a>
                            </Col>
                            <Col>
                                <a href="https://br.pinterest.com/MafaldaHolthe/_created/" className="social-media__icon"><Icon icon={pinterestSquare} /></a>
                            </Col>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Paragraph content="Phone number: +47 9999.9999"></Paragraph>
                    <div className="footer__email--block">
                        <Paragraph content="E-mail:"></Paragraph> <a href="mailto:mafaldaholthe@gmail.com" className="footer__email"> <Paragraph content="mafaldaholthe@gmail.com"></Paragraph></a>
                    </div>
                </div>
                <div className="footer__copyright">
                    <Paragraph content="© Mafalda Holthe Styling"></Paragraph>
                </div>
            </div>
        </>
    )
}

export default Footer