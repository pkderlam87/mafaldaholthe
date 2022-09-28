import React from 'react'
/**
 * 
 * @param {string} props - The content of page titles 
 * @returns <h1>
 */
function Heading(props) {
    return (
        <h1 className='heading'>{props.content}</h1>
    )
}

export default Heading