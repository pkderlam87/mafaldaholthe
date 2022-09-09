import React from 'react';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import doubleQuotesL from '@iconify/icons-ci/double-quotes-l';
import doubleQuotesR from '@iconify/icons-ci/double-quotes-r';


function Review(props) {
    return (
        <>
            <Container className="review">
                <h3>{props.title}</h3>
                <h6 className='quotes'><Icon icon={doubleQuotesL} /> {props.content} <Icon icon={doubleQuotesR} /></h6>
                <div className="review__author" style={{ marginBottom: '10%' }}>
                    <a href={props.link}><h6 className='author'>{props.author}</h6></a>
                </div>
            </Container>
        </>
    )
}

export default Review