import React from 'react';

const BookItem = (props) => {

    return (
        <div className='book-item'>
            
                <img src={props.image} alt={props.title + "cover"} />
                <a href={props.link}>
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                </a>
                <p>{props.description}</p>
            
            </div>
    )
}

export default BookItem;