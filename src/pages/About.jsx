import React from 'react';
import Heading from "../components/layout/Heading";
import Paragraph from '../components/layout/Paragraph';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/about-image-christmas.jpg';
import image2 from '../images/about-image-halloween.jpg';
import image3 from '../images/about-image-table-setting.jpg';
import WelcomeOtherPages from '../components/layout/WelcomeOtherPages';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <>
            <WelcomeOtherPages />
            <div className="about__wrapper">
                <Container className="about__title">
                    <Heading content="ABOUT" />
                </Container>
                <Container>
                    <Row className="about__text-carrousel">
                        <Col sm={12} md={12} lg={6}>
                            <Container>
                                <Paragraph content="The MH Styling would like to offer you an unique opportunity to enjoy your dream party without worries about decoration, snacks, cake, and other candies.
" /></Container>
                        </Col>
                        <Col sm={12} md={12} lg={6}>
                            <Container className="services__carousel">
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={image1}
                                            alt="Christmas decoration"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={image2}
                                            alt="Halloween decoration"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={image3}
                                            alt="Table setting"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About