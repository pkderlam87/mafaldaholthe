import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api'
import Heading from '../layout/Heading';
import Paragraph from '../layout/Paragraph';
import Carousel from 'react-bootstrap/Carousel';
import ContactForm from '../layout/ContactForm';
import WelcomeOtherPages from '../layout/WelcomeOtherPages';

function Detail() {
    const [service, setService] = useState(null);
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
        return <div className='loading'><div></div><div></div><div></div><div></div></div>;
    }

    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    return (
        <>
            <WelcomeOtherPages />
            <Container key={service.id} className="detail__service">
                <div>
                    <Heading content={service.title}></Heading>
                    <Paragraph content={service.description}></Paragraph>
                    <Button className="btn-secondary">CONTACT US</Button>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={service.images[0].url}
                                alt={service.images[0].alternativeText}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={service.images[1].url}
                                alt={service.images[1].alternativeText}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={service.images[2].url}
                                alt={service.images[2].alternativeText}
                            />

                        </Carousel.Item>
                    </Carousel>
                </div>
                <ContactForm />
            </Container>

        </>
    );
}

export default Detail;
