import React from 'react'

function Review(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <h6 className='quotes'>{props.content}</h6>
            <a href={props.link}><h6 className='author'>{props.author}</h6></a>
        </>
    )
}

export default Review