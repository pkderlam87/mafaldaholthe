import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Paragraph from './Paragraph';

function ResultHome({ id, title, description, image, alt }) {
    return (
        <>
            <Link to={`detail/${id}`} className="link-page-specific-product">
                <Card>
                    <h3>{title}</h3>
                    <Paragraph content={description}></Paragraph>
                    <div className="image-background">
                        <img src={image} alt={alt} />
                    </div>
                    <Button> More </Button>
                </Card>
            </Link>
        </>
    )
}

ResultHome.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ResultHome