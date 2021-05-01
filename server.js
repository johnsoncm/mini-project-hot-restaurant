// server.js, index.js
// Erich - 3 htmls
// create array for reservation andn waitlist
// create a set of routes for getting and posting table data
// create a set of routes for displaying html
// Erich - Use jquery  to run ajax calls to get and post data from users to the express server
// api/tables, api/waitlist, api/reservation



const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: "Casey",
        phone: "2769716670",
        email: "test@test.com",
        uniqueId: "123",
    },

    {
        name: "Erich",
        phone: "1234567789",
        email: "test@test.com",
        uniqueId: "456",

    },

    {
        name: "Jordan",
        phone: "7894561123",
        email: "test@test.com",
        uniqueId: "789",
    },
];


const waitList = 
[
    {     
    name: "Sam",
    phone: "7894561123",
    email: "test@test.com",
    uniqueId: "789",

    },
    {     
    name: "Molly",
    phone: "7894561123",
    email: "test@test.com",
    uniqueId: "789",

    },
    {     
    name: "Bill",
    phone: "7894561123",
    email: "test@test.com",
    uniqueId: "789",

    }
]

// Homepage
app.get('/' , (req, res) => res.sendFile(path.join(__dirname, './public/html/home.html')))

// Make a reservation
app.get('/add' , (req, res) => res.sendFile(path.join(__dirname, './public/html/add.html')))

app.get('/view', (req, res) => res.sendFile(path.join(__dirname, './public/html/view.html')))



// View all reservations
app.get('/api/view' , (req, res) => res.json(tables));

app.get('/api/waitlist' , (req, res) => res.json(waitList));


app.post('/add', (req, res) => {
    const newReservation = req.body;

    // newReservation.name = newReservation.name.replace(/\s+/g, '').toLowerCase();
    
    if (tables.length >= 5) {
        waitList.push(newReservation)
    }else {
        tables.push(newReservation)
    } 
    res.end();

});

// app.post('/waitlist', (req, res) => {
//     const newList = req.body;

//     // newReservation.name = newReservation.name.replace(/\s+/g, '').toLowerCase();

//     waitList.push(newList);
//     res.json(newList);
// });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));