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

app.post('/:id', (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    if (id) {
        console.log(`Updating the id for: ${id} with ${message}`)

        // Only put in a value if it did not exist prior
        if (!fakeDB.hasOwnProperty(id)) {
            fakeDB[id] = message

            res.status(200).send({
                result: fakeDB
            })
            return;
        }
    }

    res.status(400).send({
        result: `The id: ${id} provided was invalid`
    })
})

