// const express = require('express')
import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// });

//--------------------Bad Practice------------------------------------------------

// app.use(express.static('dist'))

//-------------------------------------------------------------------

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "id": 1,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 3,
          "title": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        },
        {
          "id": 4,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 5,
          "title": "What’s orange and sounds like a parrot?",
          "content": "A carrot."
        }
      ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})