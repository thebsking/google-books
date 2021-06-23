const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect('mongodb://localhost/books', {
    useNewUrlParser: true
});

const seedData = [
    {
        _id: 'slahgl',
        authors: ['J.K. Rowling'],
        title: 'Harry Potter and the Sorcers Stone',
        description: 'my favorite of the HP series',
        image: 'http://books.google.com/books/content?id=zpvysRGsBlwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
        link: 'http://books.google.com/books?id=zpvysRGsBlwC&printsec=frontcover&dq=order+of+the+pheonix&hl=&cd=1&source=gbs_api',
    },
    {
        _id: 'slah2gl',
        authors: ['J.K. Rowling'],
        title: 'Harry Potter and the Order of the Pheonix',
        description: 'my favorite of the HP series',
        image: 'http://books.google.com/books/content?id=zpvysRGsBlwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
        link: 'http://books.google.com/books?id=zpvysRGsBlwC&printsec=frontcover&dq=order+of+the+pheonix&hl=&cd=1&source=gbs_api',
    },
    {
        _id: 'slahg654l',
        authors: ['J.K. Rowling'],
        title: 'Harry Potter and the Deathly Hallows',
        description: 'my favorite of the HP series',
        image: 'http://books.google.com/books/content?id=zpvysRGsBlwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 
        link: 'http://books.google.com/books?id=zpvysRGsBlwC&printsec=frontcover&dq=order+of+the+pheonix&hl=&cd=1&source=gbs_api',
    }
];
db.Book.deleteMany({})
.then(()=> {db.Book.collection.insertMany(seedData); console.log('i ran')})
.then((data) => {
    console.log (data.result.n + ' records inserted')
    process.exit(0);
})
.catch((err) => {
    console.log(err);
    process.exit(1)
})