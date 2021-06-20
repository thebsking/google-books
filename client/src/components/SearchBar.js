import React from 'react';
import BookSharp from '@material-ui/icons/BookSharp';
import { InputAdornment } from '@material-ui/core';
import { Button, Input as TextField, makeStyles } from '@material-ui/core';
import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '80ch',
    },
}))

const SearchBar = () => {
    const classes = useStyles();
    const handleSearch=(event)=> {
        event.preventDefault();
        let query = document.getElementById('book-search');
        console.log(API.searchGoogle(query.value))
        API.searchGoogle(query.value)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        query = '';
    }
    return (
        <form className='noValidate autoComplete="on"'>
            <TextField className={classes.input} id='book-search' placeholder='search' label='Search' startAdornment={
            <InputAdornment position='start'>
                <BookSharp/>
            </InputAdornment>
            }
           />
            <Button variant="contained" type='submit' color='primary' onClick={handleSearch}>
                search
            </Button>
        </form>
    )
}

export default SearchBar;