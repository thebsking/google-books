import React from 'react';
import {Button} from '@material-ui/core'


const BookItem = (props) => {
    
    return (
        console.log(props),
        <div className='book-item' id={props.id}>
            
                <img src={props.image} alt={props.title + "cover"} />
                <h2>{props.title}</h2>
                <h3>{props.authors}</h3>
                <Button variant='contained' color='primary' href={props.link}>View on Google</Button>
                <Button variant='contained' color='secondary' onClick={props.action}>{props.btnText}</Button>
                <p>{props.description}</p>
            
            </div>
    )
}

export default BookItem;