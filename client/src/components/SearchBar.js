import React from 'react';
import BookSharp from '@material-ui/icons/BookSharp';
import { InputAdornment } from '@material-ui/core';
import { Button, Input, makeStyles } from '@material-ui/core';

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
    return (
        <form className='noValidate autoComplete="on"'>
            <Input className={classes.input} id='book-search' placeholder='search' label='Search' startAdornment={
            <InputAdornment position='start'>
                <BookSharp/>
            </InputAdornment>
            }
            InputProps={{'aria-label': 'search-box',}}/>
            <Button variant="contained" color='primary' onClick={(term) => console.log(term)}>
                search
            </Button>
        </form>
    )
}

export default SearchBar;