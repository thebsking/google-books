import React from 'react';
import BookItem from './BookItem';
import axios from 'axios';

const removeFavorite = () => {
    axios.delete('/api/books/:id', {
        //props here
    })
}

function BookContainer({props}) {
    let array = props
    return (
           array.map((book)=> {
           return <>
           <BookItem
                id={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
            />
            </>
            })
        
        )
}

export default BookContainer;