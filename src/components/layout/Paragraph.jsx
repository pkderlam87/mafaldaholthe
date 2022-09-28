import React from 'react'
/**
 * 
 * @param {string} props - The content of page paragraphs
 * @returns <p>
 */
function Paragraph(props) {
    return (
        <>
            <p>{props.content}</p>
        </>
    )
}

export default Paragraph