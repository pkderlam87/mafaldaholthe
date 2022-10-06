import React from 'react';
import { Icon } from '@iconify/react';
import doubleQuotesL from '@iconify/icons-ci/double-quotes-l';
import doubleQuotesR from '@iconify/icons-ci/double-quotes-r';
import Heading from './Heading';
import { Container } from 'react-bootstrap';
/**
 * 
 * @param {string} props - title - call Heading function to insert the title
 *                       - content - text from the home page
 *                       - link - the URL to the Instagram or Facebook user
 *                       - author - the name of the review author
 * @returns <review>
 */

function Review(props) {
    return (
        <>
            <div className="review">
                <Heading content={props.title}></Heading>
                <Container>
                    <h5 className='quotes'><Icon icon={doubleQuotesL} /> {props.content} <Icon icon={doubleQuotesR} /></h5>
                    <div className="review__author">
                        <h5><a href={props.link} className='author'>{props.author}</a></h5>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Review