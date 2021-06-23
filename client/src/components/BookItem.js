import React from 'react';

const BookItem = (props) => {

    return (
        <div className='book-item'>
            <a href={props.link}>
                <img src={props.image} alt={props.title + "cover"} />
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <p>{props.description}</p>
            </a>
            </div>
    )
}

export default BookItem;