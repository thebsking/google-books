import React from 'react';
import BookItem from './BookItem';

function BookContainer({props}) {
    let array = props
    return (
           array.map((book)=> {
           return <BookItem
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
            />})
        
        )
}

export default BookContainer;