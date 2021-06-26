import React from 'react';

const BookItem = (props) => {

    return (
        console.log(props),
        <div className='book-item' id={props.id}>
            
                <img src={props.image} alt={props.title + "cover"} />
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <a href={props.link} className='btn-primary'>View on Google</a>
                <p>{props.description}</p>
            
            </div>
    )
}

export default BookItem;