// Set up the application
const express = require('express');
const app = express();

const PORT = 8080;

// Set up a Fake Database

let fakeDB = {
    '0': 0,
    '1': 1,
    '2': 2,
}

// Add the ability parse json
app.use(express.json());

app.listen(
    PORT, 
    () => console.log(`I am listening on http://localhost:${PORT}`)
)

app.get('', (req, res) => {
    res.status(200).send({
        result: fakeDB
    })    
})

app.get('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).send({
        result: fakeDB[id]
    })    
})