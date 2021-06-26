import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import BookContainer from '../components/BookContainer';
import axios from 'axios';

let array = []

function Saved() {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    renderBooks();
  }, [])
  function renderBooks() {
    axios.get('/api/books')
      .then((res) => {
        setFavs([...res.data])
        console.log(favs)
      })
      .catch(err => console.log(err))
  }
  array = favs;
  return (
    console.log(array),
    <Container id='my-favorites'>
      <h1>My Saved Books</h1>
      {array.length ? (
        <Container>
          <BookContainer props={array} />
        </Container>
      )
        : (
          <h3>No favorites yet</h3>
        )
      }
    </Container>
  )
}

export default Saved;