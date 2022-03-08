const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    
} = require('../../controllers/thought-controller');

// set up GET all thoughts at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// set up GET one thought at /api/thought/:thoughtId
router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)

// set up POST thought at api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought)

module.exports = router;