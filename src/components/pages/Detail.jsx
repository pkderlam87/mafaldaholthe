import React from 'react';
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { BASE_URL } from '../../constants/api'
import Heading from '../layout/Heading';
import Paragraph from '../layout/Paragraph';
import Carousel from 'react-bootstrap/Carousel';
import EnquiryForm from '../layout/EnquiryForm';
import WelcomeOtherPages from '../layout/WelcomeOtherPages';

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
        return <div>An error occurred: {error}</div>;
    }

    return (
        <>
            <WelcomeOtherPages />
            <Container key={service.id} className="detail__service">
                <div>
                    <Heading content={service.title}></Heading>
                    <Paragraph content={service.description}></Paragraph>
                    <HashLink smooth to={`/detail/${id}#enquiryForm`}><Button className="btn-secondary">CONTACT US</Button></HashLink>
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
                <EnquiryForm id="enquiryForm" />
            </Container>

        </>
    );
}

export default Detail;
