import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Paragraph from './Paragraph';

function ResultHome({ id, title, description, image, alt }) {
    return (
        <>
            <Row>
                <Link to={`detail/${id}`} className="specific-product___link">
                    <Card className={title}>
                        <Col>
                            <div className="card__image--background">
                                <img src={image} alt={alt} />
                            </div>
                        </Col>
                        <Col>
                            <div className="card__text">
                                <h3>{title}</h3>
                                <Paragraph content={description}></Paragraph>
                                <Button className="btn-secondary"> More </Button>
                            </div>
                        </Col>
                    </Card>
                </Link>
            </Row>
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