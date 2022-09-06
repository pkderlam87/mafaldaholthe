import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Heading from '../layout/Heading';
import { BASE_URL } from '../../constants/api';
import { Col, Container, Row } from 'react-bootstrap';
import ResultHome from '../layout/ResultHome';
import Review from '../layout/Review';
import CommonContact from '../layout/CommonContact';

const url = BASE_URL + "/services";

function Home() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function axiosData() {
            try {
                const response = await axios.get(url);

                if (response.status === 200) {
                    setServices(response.data);
                } else {
                    setError("An error occurred");
                }
            } catch (error) {
                setError(error.toString());
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        axiosData();
    }, []);
    if (loading) {
        return <div className='loading'><div></div><div></div><div></div><div></div></div>
    }
    if (error) {
        console.log(error);
        return <div>An error occurred: {error}</div>
    }
    return (
        <>
            <section className='welcome'>
                <Heading content="PARTIES DECOR"></Heading>
            </section>
            <Container>
                <Row gap={2}>
                    {services.map((service) => {
                        const { id, title, description } = service;
                        const image = service.images[0].url;
                        const alt = service.images[0].alternativeText;

                        return (
                            <Col sm={12} md={6} lg={6} key={id}>
                                <ResultHome id={id} title={title} description={description} image={image} alt={alt} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            <Review title="Review" content="I'm so grateful for having you in my life! Thank you for sharing your love and talent with us on such a special day!" link="https://www.instagram.com/aroundthestory/" author="- @aroundthestory"></Review>
            <Review content="I'm so grateful for having you in my life! Thank you for sharing your love and talent with us on such a special day!" link="https://www.instagram.com/aroundthestory/" author="- @aroundthestory"></Review>
            <CommonContact />
        </>
    )
}

export default Home