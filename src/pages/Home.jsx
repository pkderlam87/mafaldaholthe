import React from 'react';
import { BASE_URL } from '../constants/api';
import ResultHome from '../components/layout/ResultHome';
import Review from '../components/layout/Review';
import CommonContact from '../components/layout/CommonContact';
import Welcome from '../components/layout/Welcome';
import useApi from '../components/hooks/useAPI';
import { Container } from 'react-bootstrap';
import FormError from '../components/common/FormError';

const url = BASE_URL + "/services";

function Home() {
    const { data, isLoading, isError } = useApi(url); if (isLoading) { return <div></div>; } if (isError) {
        return <FormError>{isError}</FormError>;
    }
    return (
        <>
            <Welcome />
            <Container className="home__services">
                {data.map((service) => {
                    const { id, title, description } = service;
                    const image = service.images[0].url;
                    const alt = service.images[0].alternativeText;
                    return (
                        <ResultHome id={id} title={title} description={description} image={image} alt={alt} key={id} />
                    );
                })}
            </Container>
            <Review title="Reviews" content="I'm so grateful for having you in my life! Thank you for sharing your love and talent with us on such a special day!" link="https://www.instagram.com/aroundthestory/" author="- @aroundthestory"></Review>
            <Review content="I'm so grateful for having you in my life! Thank you for sharing your love and talent with us on such a special day!" link="https://www.instagram.com/aroundthestory/" author="- @aroundthestory"></Review>
            <CommonContact />
        </>
    )
}

export default Home