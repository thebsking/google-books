import React, {useState} from 'react';
import BookSharp from '@material-ui/icons/BookSharp';
import { InputAdornment } from '@material-ui/core';
import { Button, Input as TextField, makeStyles } from '@material-ui/core';
import ResultsContainer from './ResultsContainer';
import API from '../utils/API';


const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '75ch',
    },
}))



const SearchBar = () => {
    const [results, setResults] = useState([]);
    const classes = useStyles();
    const handleSearch = (event) => {
        event.preventDefault();
        let query = document.getElementById('book-search');
        API.searchGoogle(query.value)
            .then(res => {
                setResults(res.data.items);
            })
            .catch(err => console.log(err));
        query.value = '';
    }
    return (
        <>
            <form className='noValidate autoComplete="on"'>
                <TextField className={classes.input} id='book-search' placeholder='search' label='Search' startAdornment={
                    <InputAdornment position='start'>
                        <BookSharp />
                    </InputAdornment>
                }
                />
                <Button variant="contained" type='submit' color='primary' onClick={handleSearch}>
                    search
                </Button>
            </form>

            {results.length ? (
                <>
                <h3>Results</h3>
                <ResultsContainer props={results} />
                </>
            ) : (
            <></>
            )}
            </>
            )
            }

            export default SearchBar;