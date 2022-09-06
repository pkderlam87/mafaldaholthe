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
                            <img src={logoBeige} className="secondary-logo" alt='logo'></img>
                        </Col>
                        <Col>
                            <Icon icon={instagramIcon} />
                        </Col>
                        <Col>
                            <Icon icon={facebookSquare} />
                        </Col>
                        <Col>
                            <Icon icon={pinterestSquare} />
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Paragraph content="Phone number: +47 9999.9999"></Paragraph>
                    <Paragraph content="E-mail:"></Paragraph><a href="mailto:mafaldaholthe@gmail.com" className="footer__email"><Paragraph content="mafaldaholthe@gmail.com"></Paragraph></a>
                </div>
                <div>
                    <Paragraph content="© Mafalda Holthe Styling"></Paragraph>
                </div>
            </div>
        </>
    )
}

export default Footer