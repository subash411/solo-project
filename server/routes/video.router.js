const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//PUT updating Likes
router.put('/like/:videoId', (req, res) => {
    console.log('video ID', req.params.videoId);

    const queryText = `
    UPDATE "videos"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `;

    const queryParams = [req.params.videoId];

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
    // res.send(videoItems);

    const queryText = `
    SELECT * FROM "videos"
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

// POST creating new video
router.post('/', (req, res) => {
    // check data sent
    console.log('new video', req.body);

    queryText = `
    INSERT INTO "videos"
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

// DELETE video
router.delete('/:videoId', (req, res) => {
    console.log('delete videoId', req.params.videoId);
    
    const queryText = `
        DELETE FROM "videos"
        WHERE "id" = $1;
    `;

    const queryParams = [ req.params.videoId ];

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
