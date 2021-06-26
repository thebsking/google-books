import React from 'react';
import BookItem from './BookItem';


function BookContainer({ props }) {
    let array = props;

    return (
        array.map((book) => {
            return <>
                <BookItem
                    id={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    btnText="Remove from Favorites"
                    action={() => {
                        fetch('/api/books/' + book._id, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(window.location.reload)
                            .catch(err => console.log(err))
                    }}
                />
            </>
        })

    )
}

export default BookContainer;