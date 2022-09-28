import React from 'react';
import { Icon } from '@iconify/react';
import doubleQuotesL from '@iconify/icons-ci/double-quotes-l';
import doubleQuotesR from '@iconify/icons-ci/double-quotes-r';
import Heading from './Heading';
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
                <h6 className='quotes'><Icon icon={doubleQuotesL} /> {props.content} <Icon icon={doubleQuotesR} /></h6>
                <div className="review__author">
                    <a href={props.link}><h6 className='author'>{props.author}</h6></a>
                </div>
            </div>
        </>
    )
}

export default Review