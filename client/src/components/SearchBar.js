import React from 'react';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { InputAdornment } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';

const SearchBar = () => {
    return (
        <form className='noValidate autoComplete="on"'>
            <TextField id='book-search' label='Search' variant='outlined' InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <LibraryBooks />
                    </InputAdornment>
                )
            }}/>
            <Button onClick={(term) => console.log(term)}>
                search
            </Button>
        </form>
    )
}

export default SearchBar;