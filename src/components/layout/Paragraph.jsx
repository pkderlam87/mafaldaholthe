import React from 'react'

function Paragraph(props) {
    return (
        <>
            <div>
                <p>{props.content}</p>
                <a href={props.link}>{props.textDisplay}</a>
            </div>
        </>
    )
}

export default Paragraph