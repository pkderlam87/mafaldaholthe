import React from 'react';
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { BASE_URL } from '../constants/api'
import Heading from '../components/layout/Heading';
import Paragraph from '../components/layout/Paragraph';
import Carousel from 'react-bootstrap/Carousel';
import EnquiryForm from '../components/layout/EnquiryForm';
import WelcomeOtherPages from '../components/layout/WelcomeOtherPages';
import FormError from '../components/common/FormError';

/**
 * This function is a specific request to a "/services/+ id" endpoint.
 * @returns <Detail>
 */

function Detail() {
    const [service, setService] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    let history = useNavigate();

    const { id } = useParams();

    const url = BASE_URL + "/services/" + id;

    useEffect(() => {
        async function axioData() {
            try {
                const response = await axios.get(url);
                if (response.status === 200) {
                    setService(response.data);
                    setImages(response.data.images);
                } else {
                    if (!id) {
                        history(-1);
                    }
                    setError("An error occurred");
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        axioData();
    }
    );

    if (loading) {
        return <div className="loading"></div>;
    }

    if (error) {
        return <FormError>{error}</FormError>;
    }

    return (
        <>
            <WelcomeOtherPages />
            <Container key={service.id} className="detail__service">
                <div>
                    <Heading content={service.title}></Heading>
                    <Row>
                        <Col>
                            <Paragraph content={service.description}></Paragraph>
                            <HashLink smooth to={`/detail/${id}#enquiryForm`} className="detail__button--enquiry"><Button className="btn-secondary">CONTACT US</Button></HashLink>
                        </Col>
                        <Col className="detail__image--description">
                            <img src={images[0].url} alt={images[0].alternativeText} />
                        </Col>
                    </Row>
                    <Carousel fade>
                        {
                            images.map((image, i) => {
                                const imageUrl = image.url;
                                const alt = image.alternativeText;
                                return (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100"
                                            src={imageUrl}
                                            alt={alt}
                                        />
                                    </Carousel.Item>
                                )

                            })}
                    </Carousel>
                </div>
                <EnquiryForm />
            </Container>

        </>
    );
}

export default Detail;
