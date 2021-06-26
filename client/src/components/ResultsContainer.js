import React from 'react';
import BookItem from './BookItem';

function ResultsContainer({ props }) {
    let array = props
    return (
        array.map((book) => {
            return <BookItem
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                btnText="Add to Favorites"
                action={() => {
                    fetch('/api/books/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            description: book.volumeInfo.description,
                            image: book.volumeInfo.imageLinks.thumbnail,
                            link: book.volumeInfo.infoLink
                        })
                    })
                        .then(res => res.json())
                        .catch(err => console.log(err))
                }}
            />
        })

    )
}

export default ResultsContainer;