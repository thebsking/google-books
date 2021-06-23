import React from 'react';
import BookItem from './BookItem';

function BookContainer(props) {
    return (
        [...props].map((book) => {
            console.log('book');
           return  <BookItem
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
            />
        })
        )
}

export default BookContainer;