const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//PUT updating Likes
router.put('/like/:mediaId', (req, res) => {
    console.log('media ID', req.params.mediaId);

    const queryText = `
    UPDATE "media"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    `;

    const queryParams = [req.params.mediaId];

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
    // res.send(galleryItems);

    const queryText = `
    SELECT * FROM "media"
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

// POST
router.post('/', (req, res) => {
    // check data sent
    console.log(req.body);

    queryText = `
    INSERT INTO "media"
    ("title", "url", "description", "type")
    VALUES
    ($1, $2, $3, $4);
    `;

    queryParams = [
        req.body.title,
        req.body.url,
        req.body.description,
        req.body.type
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

// DELETE Media
router.delete('/:mediaId', (req, res) => {
    console.log('delete mediaId', req.params.mediaId);
    
    const queryText = `
        DELETE FROM "media"
        WHERE "id" = $1;
    `;

    const queryParams = [ req.params.mediaId ];

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
