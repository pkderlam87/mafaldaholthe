import React from 'react';
import { BASE_URL } from '../../constants/api';
import { Col, Container, Row } from 'react-bootstrap';
import ResultHome from '../layout/ResultHome';
import Review from '../layout/Review';
import CommonContact from '../layout/CommonContact';
import Welcome from '../layout/Welcome';
import useApi from '../hooks/useAPI';

const url = BASE_URL + "/services";

function Home() {
    const { data, isLoading, isError } = useApi(url); if (isLoading) { return <div>Loading</div>; } if (isError) {
        return <div>Has error</div>;
    }
    return (
        <>
            <Welcome />
            <Container>
                <Row gap={2}>
                    {data.map((service) => {
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