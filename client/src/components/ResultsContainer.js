import React from 'react';
import BookItem from './BookItem';

function ResultsContainer({props}) {
    let array = props
    return (
           array.map((book)=> {
           return <BookItem
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.infoLink}
            />})
        
        )
}

export default ResultsContainer;