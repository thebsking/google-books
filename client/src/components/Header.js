import React from 'react';
import { AppBar, Button, Container, Toolbar } from '@material-ui/core';


function Header() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar className="top-bar">
                    <p>BK Books</p>
                    <div id="btn-container">
                    <Button href='/'>Search</Button>
                    <Button href='/saved'>Saved</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Container id="hero">
                <h1 className='title'>Google Books Search</h1>
                <h2 className='subtitle'>Powered by React</h2>
                <h3 className='description'>Search for and Save Books You Like</h3>
            </Container>
        </>
    )
}

export default Header;