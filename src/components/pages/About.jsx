import React from 'react';
import Heading from "../layout/Heading";
import Paragraph from '../layout/Paragraph';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/about-image-christmas.jpg';
import image2 from '../../images/about-image-halloween.jpg';
import image3 from '../../images/about-image-table-setting.jpg';

function About() {
    return (
        <>
            <Heading content="ABOUT" />
            <Paragraph content="The MH Styling would like to offer you an unique opportunity to enjoy your dream party without worries about decoration, snacks, cake, and other candies.
" />
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

        </>
    )
}

export default About