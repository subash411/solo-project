const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//PUT updating Likes
router.put('/like/:memeId', (req, res) => {
    console.log('meme ID', req.params.memeId);

    const queryText = `
    UPDATE "meme"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `;

    const queryParams = [req.params.memeId];

    // request update to database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            console.log('added like', dbRes);
            // tell client of success
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool PUT ERROR', err);
            res.sendStatus(500);
        });
}); // END PUT updating Likes

// GET Route
router.get('/', (req, res) => {
    // res.send(memeItems);

    const queryText = `
    SELECT * FROM "meme"
    ORDER BY "id" ASC;
    `;

    // send request to database
    pool.query(queryText)
        .then((dbRes) => {
            console.log('data from database:', dbRes);
            res.send(dbRes.rows);
        })
        .catch((err) => {
            // tell client of failure
            console.log('DB GET ERROR', err);
            res.sendStatus(500);
        });
}); // END GET Route

// POST creating new meme
router.post('/', (req, res) => {
    // check data sent
    console.log('new meme', req.body);

    queryText = `
    INSERT INTO "meme"
    ("title", "url")
    VALUES
    ($1, $2);
    `;

    queryParams = [
        req.body.title,
        req.body.url,
    ];

    // sent data to database
    pool.query(queryText, queryParams)
        .then(() => {
            // tell client of success
            console.log('data from database');
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool POST ERROR', err);
            res.sendStatus(500);
        });
});// end POST route

// DELETE Meme
router.delete('/:memeId', (req, res) => {
    console.log('delete memeId', req.params.memeId);
    
    const queryText = `
        DELETE FROM "meme"
        WHERE "id" = $1;
    `;

    const queryParams = [ req.params.memeId ];

    // sent request to database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // tell client of success
            console.log('pool DELETE success!');
            res.sendStatus(201);
        })
        .catch((err) => {
            // tell client of failure
            console.log('pool DELETE ERROR!', err);
            res.sendStatus(500);
        });
});// end DELETE route

module.exports = router;
