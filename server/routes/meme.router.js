const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "memeImages";';
    pool

    .query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error', err);
        res.sendStatus(500);
    });
});

//add new favorite
router.post('/', (req, res) => {
    const newMeme = req.body.url;
    const newTitle = req.body.alt;

    const queryText = `
    INSERT INTO "memeImages" ("name", "url")
    VALUES ($1,$2) `;

    const queryValues = [newTitle, newMeme]
  pool.query(queryText, queryValues)
  .then(() => {res.sendStatus(201); })
  .catch((err) => {
    console.log('Error completing POST query', err)
  })
});
// update given meme with a category id
router.put('/:memeId', (req, res) => {
	// req.body should contain a category_id to add to this favorite image

  console.log('in PUT fav router req.body', req.body);
  console.log('in PUT fav router req.params', req.params.id);

  const queryText = `
    UPDATE "memeImages"
    SET "categoryId" = $1
    WHERE id = $2;
  `;

  const queryParams = [
    req.body, req.params.id
  ];

  pool.query(queryText, queryParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/', (req, res) => {
	res.sendStatus(200);
});

module.exports = router;

